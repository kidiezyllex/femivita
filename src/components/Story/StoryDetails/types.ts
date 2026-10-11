export interface StoryDetailsData {
  subtitle?: string;
  title?: string;
  paragraphs?: string[];
}

export interface StoryDetailsProps {
  data?: StoryDetailsData;
}

export const DEFAULT_STORY_DETAILS_DATA: StoryDetailsData = {
  subtitle: "Câu chuyện thương hiệu",
  title: "Về MUSASE",
  paragraphs: [
    "Trong cuộc sống, chuối là món quà quen thuộc của thiên nhiên đối với mọi người. Nhưng mỗi ngày, hàng tấn vỏ chuối bị vứt bỏ sau khi phần ruột được sử dụng. Trong mắt nhiều người, đó là rác thải nông nghiệp. Tuy nhiên, đứng ở góc nhìn của chúng tôi - thấy ở những chiếc vỏ chuối ấy có một tiềm năng hoàn toàn khác. Chúng tôi tin rằng thiên nhiên chưa bao giờ tạo ra những điều vô nghĩa - vấn đề chỉ là chúng ta đã thấu hiểu và khai thác nó đúng cách hay chưa.",
    'Nghiên cứu cho thấy vỏ chuối sở hữu hàm lượng beta carotene, polyphenol và chất chống oxy hóa rất dồi dào. Những hoạt chất vàng này mang đến khả năng kháng viêm mạnh mẽ, dưỡng ẩm, ngăn ngừa lão hóa và làm sáng da một cách tự nhiên. Đây chính là "chìa khóa" sinh học hoàn hảo để nuôi dưỡng làn da khỏe đẹp từ gốc.',
    "Để biến một phụ phẩm thô thành hoạt chất chăm sóc da tinh khiết, an toàn và đạt hiệu quả tối ưu. Chúng tôi đã chủ động tìm kiếm và hợp tác với các phòng lab và viện nghiên cứu hàng đầu quốc tế, nơi sở hữu công nghệ trích xuất sinh học (Bio-extraction) tiên tiến nhất. Nhờ quy trình chiết xuất khắt khe, những hoạt chất tinh túy chống lão hóa và dưỡng ẩm vượt trội trong vỏ chuối đã được chắt lọc trọn vẹn, đáp ứng những tiêu chuẩn mỹ phẩm khắt khe.",
    "Từ đó Musase ra đời, không chỉ để mang đến một giải pháp skincare hiệu quả, mà còn là lời cam kết cho một lối sống bền vững. Mỗi sản phẩm bạn cầm trên tay là sự kết nối với nguồn dưỡng chất tự nhiên thuần khiết, cùng bạn nuôi dưỡng làn da rạng rỡ và tôn trọng trọn vẹn những giá trị từ thiên nhiên.",
    "Tên thương hiệu Musase được truyền cảm hứng từ Musaceae – tên khoa học của họ thực vật loài chuối. Sự lựa chọn này chính là lời tuyên ngôn mạnh mẽ nhất của chúng tôi: Tập trung toàn bộ năng lực và tâm huyết vào tiềm năng vô hạn của loài Chuối. Chúng tôi tin rằng khi một nguyên liệu được thấu hiểu tận cùng, nó sẽ tạo nên những giá trị cho chăm sóc da khác biệt và trọn vẹn nhất.",
  ],
};
