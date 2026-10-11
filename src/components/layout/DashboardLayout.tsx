"use client";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { useResponsive } from "@/hooks/use-mobile";
import { MenuItem } from "@/interface/types";
import { clearAuthData } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { mdiFullscreen, mdiFullscreenExit, mdiLogout, mdiMenu } from "@mdi/js";
import { Icon } from "@mdi/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getDashboardMenuItems } from "./dashboardMenuItems";

function InternalHeader({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (e) {}
    }
  }, []);

  const handleLogout = () => {
    clearAuthData();
    router.push("/");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[50] flex h-[64px] items-center justify-between border-b border-primaryV1/20 bg-eerieBlackV1 px-4">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={toggle} className="md:hidden">
          <Icon path={mdiMenu} size={1} />
        </Button>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/primary-logo.webp"
            width={150}
            height={40}
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {user && (
          <div className="mr-2 hidden flex-col items-end md:flex">
            <span className="text-sm font-semibold text-white">
              {user.name || user.username || "Admin"}
            </span>
            <span className="text-xs capitalize text-neutral-400">
              {user.role || "Administrator"}
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          title="Đăng xuất"
          className="text-neutral-400 transition-colors hover:text-red-400"
        >
          <Icon path={mdiLogout} size={0.8} />
        </Button>
      </div>
    </header>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isMobile, isTablet } = useResponsive();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  if (isMobile) {
    return (
      <MobileLayout isOpen={isOpen} toggle={toggle}>
        {children}
      </MobileLayout>
    );
  }

  if (isTablet) {
    return (
      <TabletLayout isOpen={isOpen} toggle={toggle}>
        {children}
      </TabletLayout>
    );
  }

  return (
    <DesktopLayout isOpen={isOpen} toggle={toggle}>
      {children}
    </DesktopLayout>
  );
}

function DesktopLayout({
  children,
  isOpen,
  toggle,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}) {
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (userStr) {
      try {
        setProfile(JSON.parse(userStr));
      } catch (e) {}
    }
  }, []);

  const permissions = profile?.permissions || [];
  const role = profile?.role;
  const dashboardMenuItems: MenuItem[] = getDashboardMenuItems(permissions, role);

  const isMenuActive = (menu: MenuItem) => {
    if (menu.path && pathname === menu.path) return true;
    if (menu.subMenu?.some((sub) => pathname === sub.path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-eerieBlackV1" suppressHydrationWarning>
      <InternalHeader toggle={toggle} isOpen={isOpen} />
      <div className="flex overflow-y-auto pt-[64px]">
        <div
          className={cn(
            "sticky top-[64px] h-[calc(100vh-64px)] flex-shrink-0 self-start border-r border-primaryV1/20 bg-eerieBlackV1 transition-all duration-300",
            isOpen ? "w-[270px]" : "flex w-0 justify-center overflow-hidden md:w-16",
          )}
        >
          <div className="flex h-full flex-col bg-eerieBlackV1">
            <nav className="custom-scrollbar flex-1 overflow-y-auto bg-eerieBlackV1 py-4">
              <ul className={cn("", isOpen ? "px-3" : "px-2")}>
                {dashboardMenuItems.map((menu) => (
                  <li key={menu.id} className="mb-2">
                    <div
                      className="relative"
                      onMouseEnter={() => !isOpen && setHoverMenu(menu.id)}
                      onMouseLeave={() => setHoverMenu(null)}
                    >
                      <Link href={menu.path}>
                        <RippleEffect rippleColor="rgba(68, 215, 182, 0.3)" duration={500}>
                          <div
                            className={cn(
                              "flex h-[44px] cursor-pointer items-center rounded-lg border p-2 text-sm font-medium transition-all duration-300",
                              isMenuActive(menu)
                                ? "border-accent/20 bg-secondary/10 text-secondary shadow-[0_0_15px_rgba(68,215,182,0.1)]"
                                : "border-transparent text-neutral-400 hover:border-accent/10 hover:bg-secondary/5 hover:text-secondary/80",
                              !isOpen && "w-[46px] !justify-center",
                            )}
                          >
                            <Icon
                              path={menu.icon}
                              size={0.8}
                              className={cn(
                                "flex-shrink-0",
                                isMenuActive(menu) ? "text-secondary" : "text-neutral-400",
                              )}
                            />
                            {isOpen && (
                              <span className="ml-3 text-nowrap font-semibold">{menu.name}</span>
                            )}
                          </div>
                        </RippleEffect>
                      </Link>

                      {!isOpen && hoverMenu === menu.id && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -5 }}
                            transition={{ duration: 0.2 }}
                            className="fixed z-[1000] ml-16 whitespace-nowrap rounded-md border border-primaryV1/20 bg-darkCardV1 px-3 py-2 text-xs font-semibold text-secondary shadow-xl"
                            style={{ top: "auto" }}
                          >
                            {menu.name}
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className={cn("w-full border-t border-primaryV1/20 p-4", isOpen ? "px-4" : "px-2")}
            >
              <Button
                onClick={toggle}
                variant="ghost"
                className={cn(
                  "w-full bg-primaryV1/10 hover:bg-primaryV1/20",
                  !isOpen && "h-10 w-10 p-0",
                )}
              >
                <Icon path={isOpen ? mdiFullscreenExit : mdiFullscreen} size={0.8} />
                {isOpen && <span className="ml-2">Thu gọn</span>}
              </Button>
            </div>
          </div>
        </div>
        <main className="custom-scrollbar flex h-[calc(100vh-64px)] flex-1 flex-col overflow-y-auto">
          <div className="flex-1 px-4 py-4">{children}</div>
        </main>
      </div>
    </div>
  );
}

function TabletLayout({
  children,
  isOpen,
  toggle,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}) {
  const pathname = usePathname();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (userStr) {
      try {
        setProfile(JSON.parse(userStr));
      } catch (e) {}
    }
  }, []);

  const permissions = profile?.permissions || [];
  const role = profile?.role;
  const menuItems = getDashboardMenuItems(permissions, role);

  return (
    <div className="flex min-h-screen flex-col bg-eerieBlackV1">
      <InternalHeader toggle={toggle} isOpen={isOpen} />
      <div className="mt-[64px] flex h-[calc(100vh-64px)] flex-1 overflow-hidden">
        <div className="flex h-full w-16 flex-col items-center border-r border-primaryV1/20 bg-eerieBlackV1 py-4">
          <nav className="w-full flex-1 space-y-2 px-2">
            {menuItems.map((menu) => (
              <Link key={menu.id} href={menu.path}>
                <div
                  className={cn(
                    "flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border transition-all",
                    pathname === menu.path
                      ? "border-accent/20 bg-secondary/10 text-secondary shadow-[0_0_15px_rgba(68,215,182,0.1)]"
                      : "border-transparent text-neutral-400 hover:bg-secondary/5",
                  )}
                >
                  <Icon path={menu.icon} size={0.8} />
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <main className="custom-scrollbar flex-1 overflow-y-auto bg-eerieBlackV1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

function MobileLayout({
  children,
  isOpen,
  toggle,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}) {
  const pathname = usePathname();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (userStr) {
      try {
        setProfile(JSON.parse(userStr));
      } catch (e) {}
    }
  }, []);

  const permissions = profile?.permissions || [];
  const role = profile?.role;
  const menuItems = getDashboardMenuItems(permissions, role);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-eerieBlackV1">
      <InternalHeader toggle={toggle} isOpen={isOpen} />
      <Drawer
        open={isOpen}
        onOpenChange={(val) => {
          if (!val && isOpen) toggle();
        }}
        direction="left"
      >
        <DrawerContent
          title="Menu điều hướng"
          className="!inset-x-auto !inset-y-0 !left-0 !right-auto !mt-0 flex h-full w-[280px] flex-col !rounded-none !rounded-r-2xl border-r border-primaryV1/20 bg-darkCardV1 p-0 [&>div:first-child]:hidden"
        >
          <div className="flex items-center justify-center border-b border-primaryV1/20 p-4">
            <Image
              src="/images/primary-logo.webp"
              width={200}
              height={100}
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto p-4">
            {menuItems.map((item) => (
              <Link key={item.id} href={item.path} onClick={toggle}>
                <div
                  className={cn(
                    "mb-2 flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all",
                    pathname === item.path
                      ? "border-accent/20 bg-secondary/10 text-secondary"
                      : "border-transparent text-primaryV1 hover:bg-secondary/5",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg",
                      pathname === item.path ? "bg-secondary/20" : "bg-primaryV1/20",
                    )}
                  >
                    <Icon path={item.icon} size={0.8} />
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </Link>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>

      <main className="custom-scrollbar mt-[64px] flex-1 overflow-y-auto bg-eerieBlackV1 p-4">
        {children}
      </main>
    </div>
  );
}
