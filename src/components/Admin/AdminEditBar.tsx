"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/mdi-icon";
import { useOptionalLanding } from "@/context/LandingContext";
import { formatDateWithTime } from "@/lib/format";
import { EditableContextLike } from "@/types/editableContext";
import {
  mdiAlertCircleOutline,
  mdiCheckCircleOutline,
  mdiContentSaveAllOutline,
  mdiLogout,
  mdiOpenInNew,
  mdiPencilOutline,
  mdiUndo,
} from "@mdi/js";
import Link from "next/link";
import React from "react";

interface AdminEditBarProps {
  contextValue?: EditableContextLike;
}

export const AdminEditBar: React.FC<AdminEditBarProps> = ({ contextValue }) => {
  const landing = useOptionalLanding();
  const ctx = contextValue ?? landing;

  if (!ctx || !ctx.isEditMode || !ctx.isAdmin) return null;

  const { isSaving, hasUnsavedChanges, saveChanges, discardChanges, logoutAdmin } = ctx;

  const lastUpdatedAt = landing?.landingData?.updatedAt;

  return (
    <aside
      aria-label="Thanh công cụ quản trị"
      className="flex w-full select-none flex-wrap items-center justify-between gap-3 border-b border-accentV1/40 bg-eerieBlackV1 px-4 py-3 text-xs text-creamBackgroundV1 sm:text-sm"
    >
      {/* Left info */}
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="flex items-center gap-2 rounded bg-accentV1 px-3 py-1 text-xs font-bold uppercase tracking-wider text-creamBackgroundV1">
          <Icon path={mdiPencilOutline} size={0.8} /> Chế độ Admin
        </span>
        {lastUpdatedAt && (
          <span className="flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-950/60 px-2 py-1 text-xs font-medium text-emerald-300">
            <Icon path={mdiPencilOutline} size={0.8} />
            Chỉnh sửa gần nhất: {formatDateWithTime(lastUpdatedAt)}
          </span>
        )}
        {hasUnsavedChanges ? (
          <span className="flex items-center gap-1 rounded border border-amber-500/30 bg-amber-950/60 px-2 py-1 text-xs font-medium text-amber-300">
            <Icon path={mdiAlertCircleOutline} size={0.8} /> Có thay đổi chưa lưu
          </span>
        ) : (
          <span className="flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-950/60 px-2 py-1 text-xs font-medium text-emerald-300">
            <Icon path={mdiCheckCircleOutline} size={0.8} /> Dữ liệu đã đồng bộ
          </span>
        )}
      </div>

      {/* Right Action buttons */}
      <div className="flex items-center gap-2">
        {/* Discard changes */}
        {hasUnsavedChanges && (
          <Button variant="secondaryV1" type="button" onClick={discardChanges} disabled={isSaving}>
            <Icon path={mdiUndo} size={0.8} /> Hoàn tác
          </Button>
        )}

        {/* Save button */}
        <Button variant="accentV1" type="button" onClick={saveChanges} disabled={isSaving}>
          <Icon path={mdiContentSaveAllOutline} size={0.8} />
          {isSaving ? "Đang lưu lên máy chủ..." : "Lưu tất cả thay đổi"}
        </Button>

        {/* Exit edit mode / View public site */}
        <Button asChild variant="secondaryV1">
          <Link href="/" target="_blank" title="Mở trang xem trước trong tab mới">
            <Icon path={mdiOpenInNew} size={0.8} />{" "}
            <span className="hidden sm:inline">Xem trang khách</span>
          </Link>
        </Button>

        {/* Logout button */}
        <Button
          type="button"
          onClick={logoutAdmin}
          size="icon"
          variant="supportV1"
          title="Đăng xuất quyền Admin"
        >
          <Icon path={mdiLogout} size={0.8} />
        </Button>
      </div>
    </aside>
  );
};
