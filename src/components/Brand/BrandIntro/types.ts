export interface BrandIntroSlide {
  id: string;
  title: string;
  lead?: string;
  description: string;
}

export interface BrandIntroData {
  eyebrow: string;
  headline: string;
  textureImage: string;
  pictureImage: string;
  pictureAlt: string;
  prevLabel: string;
  nextLabel: string;
  slides: BrandIntroSlide[];
}

export interface BrandIntroProps {
  data: BrandIntroData;
}

export const DEFAULT_BRAND_INTRO_DATA: BrandIntroData = {
  eyebrow: "Nơi thầm kín của những câu chuyện chưa kể",
  headline:
    "Femivita là sản phẩm thuộc tập đoàn ENBIOSCIENCE CO., LTD - Trung tâm nghiên cứu và phát triển sản phẩm mỹ phẩm Hàn Quốc.",
  textureImage: "/images/brand/texture.webp",
  pictureImage: "/images/brand/lab.webp",
  pictureAlt: "Nhà nghiên cứu ENBIOSCIENCE làm việc trong phòng thí nghiệm",
  prevLabel: "Slide trước",
  nextLabel: "Slide tiếp theo",
  slides: [
    {
      id: "slide-1",
      title: "Công nghệ phục hồi đột phá",
      lead: "Nghiên cứu bởi tập đoàn y sinh hàng đầu Hàn Quốc ENBIOSCIENCE",
      description:
        'Femivita là thương hiệu tiên phong tại Việt Nam ứng dụng công nghệ đột phá Exosome kết hợp cùng triết lý "Pro-aging" vào chu trình chăm sóc vùng kín. Được nghiên cứu và sản xuất bởi Tập đoàn Dược mỹ phẩm Enbioscience (Hàn Quốc) với hơn 25 năm kinh nghiệm, Femivita ra đời nhằm mang lại giải pháp phục hồi tận gốc, đánh thức cơ chế tự cấp ẩm sinh lý và tôn vinh vẻ đẹp kiêu hãnh, tự tin vốn có của người phụ nữ.',
    },
    { 
      id: "slide-2", 
      title: "Tôn vinh yêu thương bản thân", 
      description: "Femivita hướng tới trở thành thương hiệu uy tín hàng đầu trong lĩnh vực chăm sóc sức khỏe vùng kín tại Việt Nam. Chúng tôi nỗ lực tái định hình thói quen của phái đẹp: Biến việc chăm sóc vùng nhạy cảm từ nỗi lo thầm kín thành một hành trình tự hào, tinh tế và là biểu tượng của sự thương yêu bản thân đúng nghĩa." 
    },
    { 
      id: "slide-3", 
      title: "Chăm sóc chuẩn quốc tế", 
      description: "Femivita đồng hành cùng phụ nữ vượt qua những rào cản tâm lý và sự thay đổi của thời gian (sau sinh, tiền mãn kinh, bận rộn cuộc sống,…). Bằng các sản phẩm 100% thuần chay, đạt tiêu chuẩn khắt khe FDA Hoa Kỳ & ISO Hàn Quốc, chúng tôi cam kết mang đến quy trình chăm sóc chuẩn y khoa lành tính và giúp bảo vệ môi trường sinh lý tự nhiên." 
    },
    { 
      id: "slide-4", 
      title: "Chuyên gia dày dặn kinh nghiệm", 
      description: "Femivita được bảo chứng bởi đội ngũ các nhà khoa học, chuyên gia R&D hàng đầu tại Tập đoàn Enbioscience Hàn Quốc, cùng sự đồng hành của các chuyên gia tư vấn giàu kinh nghiệm tại Việt Nam. Đội ngũ của chúng tôi làm việc với tinh thần luôn đặt người sử dụng lên hàng đầu. Chúng tôi luôn sẵn sàng lắng nghe và tư vấn phù hợp nhất cho từng trải nghiệm của khách hàng." 
    },
  ],
};
