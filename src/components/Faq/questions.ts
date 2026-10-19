import type { FaqQuestion } from "./types";

// Answers keep "\n" between steps; FaqAccordionItem renders them as line breaks.

export const ABOUT_QUESTIONS: FaqQuestion[] = [
  {
    id: "about-brand",
    categoryId: "about",
    question: "Thương hiệu: Công nghệ phục hồi đột phá",
    answer: `Femivita là thương hiệu tiên phong tại Việt Nam ứng dụng công nghệ đột phá Exosome kết hợp cùng triết lý "Pro-aging" vào chu trình chăm sóc vùng kín. Được nghiên cứu và sản xuất bởi Tập đoàn Dược mỹ phẩm Enbioscience (Hàn Quốc) với hơn 25 năm kinh nghiệm, Femivita ra đời nhằm mang lại giải pháp phục hồi tận gốc, đánh thức cơ chế tự cấp ẩm sinh lý và tôn vinh vẻ đẹp kiêu hãnh, tự tin vốn có của người phụ nữ.`,
  },
  {
    id: "about-vision",
    categoryId: "about",
    question: "Tầm nhìn: Tôn vinh yêu thương bản thân",
    answer:
      "Femivita hướng tới trở thành thương hiệu uy tín hàng đầu trong lĩnh vực chăm sóc sức khỏe vùng kín tại Việt Nam. Chúng tôi nỗ lực tái định hình thói quen của phái đẹp: Biến việc chăm sóc vùng nhạy cảm từ nỗi lo thầm kín thành một hành trình tự hào, tinh tế và là biểu tượng của sự thương yêu bản thân đúng nghĩa.",
  },
  {
    id: "about-mission",
    categoryId: "about",
    question: "Sứ mệnh: Chăm sóc chuẩn quốc tế",
    answer:
      "Femivita đồng hành cùng phụ nữ vượt qua những rào cản tâm lý và sự thay đổi của thời gian (sau sinh, tiền mãn kinh, bận rộn cuộc sống,…). Bằng các sản phẩm 100% thuần chay, đạt tiêu chuẩn khắt khe FDA Hoa Kỳ & ISO Hàn Quốc, chúng tôi cam kết mang đến quy trình chăm sóc chuẩn y khoa lành tính và giúp bảo vệ môi trường sinh lý tự nhiên.",
  },
  {
    id: "about-team",
    categoryId: "about",
    question: "Đội ngũ: Chuyên gia dày dặn kinh nghiệm",
    answer:
      "Femivita được bảo chứng bởi đội ngũ các nhà khoa học, chuyên gia R&D hàng đầu tại Tập đoàn Enbioscience Hàn Quốc, cùng sự đồng hành của các chuyên gia tư vấn giàu kinh nghiệm tại Việt Nam. Đội ngũ của chúng tôi làm việc với tinh thần luôn đặt người sử dụng lên hàng đầu. Chúng tôi luôn sẵn sàng lắng nghe và tư vấn phù hợp nhất cho từng trải nghiệm của khách hàng.",
  },
];

export const GEL_VENUS_QUESTIONS: FaqQuestion[] = [
  {
    id: "gel-venus-1",
    categoryId: "gel-venus",
    question: "Gel Venus có tác dụng phụ không?",
    answer:
      "Không. Gel Venus đạt các chứng nhận an toàn quốc tế như FDA (Hoa Kỳ) và ISO. Sản phẩm có nguồn gốc 100% từ thiên nhiên, thuần chay và không chứa thành phần biến đổi gen (Non-GMO), đảm bảo an toàn tuyệt đối cho làn da nhạy cảm.",
  },
  {
    id: "gel-venus-2",
    categoryId: "gel-venus",
    question: "Gel Venus khác biệt gì so với các sản phẩm bôi trơn truyền thống?",
    answer: `Khác biệt lớn nhất của Gel Venus là khả năng kích thích cơ thể tự tiết "nước thật" và hỗ trợ tái tạo tế bào từ bên trong, thay vì chỉ tạo độ mướt giả tạm thời. Nhờ các thành phần sinh học vượt trội như Exosome, Peptide, NMN và các axit amin, sản phẩm giúp cân bằng nội tiết tại chỗ, phục hồi niêm mạc và mang lại hiệu quả lâu dài.`,
  },
  {
    id: "gel-venus-3",
    categoryId: "gel-venus",
    question: "Tôi cần dùng tay để thoa Gel Venus, điều này có an toàn không?",
    answer:
      "Hoàn toàn an toàn. Bạn chỉ cần rửa sạch tay và vùng kín trước khi sử dụng. Bản thân Gel Venus chứa các thành phần kháng khuẩn, ngừa viêm nhiễm rất lành tính nên bạn hoàn toàn có thể yên tâm khi thao tác bằng tay.",
  },
  {
    id: "gel-venus-4",
    categoryId: "gel-venus",
    question: "Gel Venus có tương thích với các sản phẩm chăm sóc cá nhân khác không?",
    answer:
      "Chắc chắn rồi. Gel Venus tương thích hoàn toàn với các sản phẩm làm sạch và chăm sóc cá nhân khác. Là dòng serum dưỡng và phục hồi chuyên sâu, bạn càng duy trì sử dụng đều đặn thì hiệu quả tái tạo niêm mạc càng cao.",
  },
  {
    id: "gel-venus-5",
    categoryId: "gel-venus",
    question: "Sử dụng Gel Venus có bị phụ thuộc không?",
    answer:
      "Không, Gel Venus không gây phụ thuộc. Việc sử dụng theo liệu trình từ 1–2 lọ giúp phục hồi cơ chế tiết dịch tự nhiên và khoái cảm nội sinh của cơ thể. Ngay cả khi ngưng sử dụng, cơ thể vẫn duy trì được độ ẩm mượt tự nhiên.",
  },
  {
    id: "gel-venus-6",
    categoryId: "gel-venus",
    question: "Tại sao giá của Gel Venus lại cao hơn một số loại gel bôi trơn khác?",
    answer:
      "Gel Venus không đơn thuần là giải pháp cấp ẩm tạm thời, mà là dòng serum phục hồi y sinh cao cấp. Sản phẩm chứa các yếu tố tăng trưởng tế bào (NMN, Exosome, Peptide) giúp tái tạo niêm mạc, tăng độ co bóp, đàn hồi và lưu thông máu vùng chậu. Ngoài ra, một lọ Gel Venus 20ml có thể dùng từ 3–4 tháng (mỗi lần chỉ cần 2 hạt đậu nhỏ), tiết kiệm hơn rất nhiều so với các dòng gel dạng ống bơm dùng 1 lần.",
  },
  {
    id: "gel-venus-7",
    categoryId: "gel-venus",
    question: "Cách sử dụng Gel Venus như thế nào?",
    answer: [
      "Bước 1: Rửa sạch tay và vệ sinh nhẹ nhàng vùng kín.",
      "Bước 2: Lấy khoảng 2 hạt đậu nhỏ Gel Venus ra đầu ngón tay.",
      "Bước 3: Thoa nhẹ nhàng vào môi lớn, môi bé và niêm mạc vùng Y trước khi gần gũi 5 phút (hoặc dùng hằng ngày để dưỡng phục hồi).",
    ].join("\n"),
  },
  {
    id: "gel-venus-8",
    categoryId: "gel-venus",
    question: "Sản phẩm có mùi vị không và có dùng được bằng miệng (Oral Sex) không?",
    answer:
      "Gel Venus hoàn toàn không màu, không mùi, không vị. Thành phần 100% thuần chay đạt chuẩn y khoa nên hoàn toàn an toàn và thoải mái khi sử dụng bằng miệng.",
  },
  {
    id: "gel-venus-9",
    categoryId: "gel-venus",
    question: "Một lọ Gel Venus sử dụng được trong bao lâu?",
    answer:
      "Mỗi lọ có dung tích 20ml, có thể sử dụng khoảng 3–4 tháng nếu dùng đều đặn (mỗi lần lấy dung lượng bằng 2 hạt đậu). Chi phí tính ra cho mỗi lần sử dụng là rất tối ưu.",
  },
  {
    id: "gel-venus-10",
    categoryId: "gel-venus",
    question: "Gel Venus có hỗ trợ ngăn ngừa và điều trị viêm nhiễm, nấm ngứa không?",
    answer:
      "Có. Gel Venus chứa Acid Lactic giúp duy trì độ pH 4.5 chuẩn sinh lý, củng cố hàng rào vi sinh bảo vệ khỏi vi khuẩn và nấm ngứa. Nếu đang gặp tình trạng ngứa nhẹ hay khó chịu, bạn sẽ cảm nhận sự dịu mát và cải thiện rõ rệt ngay trong tuần đầu sử dụng.",
  },
  {
    id: "gel-venus-11",
    categoryId: "gel-venus",
    question: "Trải nghiệm ngay sau khi thoa Gel Venus như thế nào?",
    answer:
      "Chỉ sau khoảng 5 phút thoa nhẹ, bạn sẽ cảm nhận được độ the mát dễ chịu, kích thích tuần hoàn máu mang lại cảm giác rạo rực và độ ẩm tự nhiên bắt đầu tiết ra dạt dào.",
  },
  {
    id: "gel-venus-12",
    categoryId: "gel-venus",
    question: "Sự khác biệt giữa Gel Venus và các loại gel dưỡng âm đạo thông thường là gì?",
    answer: `Các loại gel dưỡng thông thường chủ yếu chỉ hỗ trợ làm sạch hoặc cấp ẩm bề mặt. Gel Venus là giải pháp chuyên sâu giúp kích thích cơ thể tự tiết "nước thật" 100%, đồng thời là sản phẩm tiên phong kết hợp các hoạt chất trẻ hóa tế bào (NMN, Exosome, Peptide) giúp làm dày niêm mạc, tăng độ đàn hồi và phòng ngừa viêm nhiễm phụ khoa toàn diện.`,
  },
];

export const FOAM_QUESTIONS: FaqQuestion[] = [
  {
    id: "foam-1",
    categoryId: "foam",
    question:
      "Bọt vệ sinh Zone Y Fresh có thể sử dụng hằng ngày không hay chỉ dùng khi có biểu hiện viêm nhiễm?",
    answer:
      "Hoàn toàn có thể dùng hằng ngày. Bọt vệ sinh Zone Y Fresh được thiết kế với công thức sinh học dịu nhẹ, chuẩn pH 4.5 giúp duy trì cơ chế tự bảo vệ tự nhiên của vùng kín. Việc làm sạch nhẹ nhàng 1–2 lần/ngày giúp giữ vùng Y luôn sạch thoáng, ngăn ngừa vi khuẩn gây mùi mà không làm khô rát hay ảnh hưởng đến môi trường sinh lý.",
  },
  {
    id: "foam-2",
    categoryId: "foam",
    question: "Chỉ số pH 4.5 của bọt vệ sinh Zone Y Fresh có ý nghĩa gì đối với sức khỏe vùng kín?",
    answer:
      "Môi trường âm đạo tự nhiên của phụ nữ khỏe mạnh có độ pH dao động từ 3.8 – 4.5. Độ pH 4.5 trong Zone Y Fresh giúp tạo điều kiện lý tưởng cho hệ lợi khuẩn (Lactobacillus) phát triển, đồng thời ức chế các vi khuẩn có hại và nấm ngứa. Nếu dùng các loại xà phòng tắm có độ pH kiềm cao (từ 7–9), lớp màng bảo vệ này sẽ bị phá hủy, dễ dẫn đến khô rát và viêm nhiễm.",
  },
  {
    id: "foam-3",
    categoryId: "foam",
    question:
      'Phụ nữ mang thai, sau sinh hoặc trong kỳ "đèn đỏ" có dùng bọt vệ sinh Zone Y Fresh được không?',
    answer:
      "Có. Đây là những thời điểm vùng Y tiết nhiều dịch nhầy, máu kinh hoặc sản dịch, khiến môi trường âm đạo trở nên vô cùng nhạy cảm và dễ tổn thương. Với thành phần chiết xuất tự nhiên, không cồn, không paraben, bọt vệ sinh Zone Y Fresh giúp làm sạch dịu nhẹ, khử mùi hiệu quả và ngăn ngừa nguy cơ vi khuẩn xâm nhập.",
  },
  {
    id: "foam-4",
    categoryId: "foam",
    question: "Zone Y Fresh có hương liệu không và da nhạy cảm, dễ kích ứng có dùng được không?",
    answer:
      "Zone Y Fresh được tối ưu độ an toàn cho làn da nhạy cảm nhất. Mùi hương tự nhiên dịu nhẹ đến từ các chiết xuất thảo mộc sinh học, hoàn toàn không sử dụng hương liệu hóa học tổng hợp nồng gắt. Công thức dạng bọt mịn đã qua kiểm nghiệm da liễu, không gây châm chích hay kích ứng khi sử dụng hằng ngày.",
  },
  {
    id: "foam-5",
    categoryId: "foam",
    question: "Ở độ tuổi nào thì nên bắt đầu sử dụng bọt vệ sinh hằng ngày?",
    answer:
      "Bạn có thể bắt đầu sử dụng bọt vệ sinh từ độ tuổi từ 18 tuổi khi cơ thể có sự thay đổi nội tiết tố và xuất hiện khí hư sinh lý. Bọt vệ sinh Zone Y Fresh là lựa chọn phù hợp giúp hình thành thói quen chăm sóc vùng Y đúng cách từ sớm để bảo vệ sức khỏe sinh sản lâu dài.",
  },
  {
    id: "foam-6",
    categoryId: "foam",
    question: "Bọt vệ sinh Zone Y Fresh có điều trị dứt điểm được bệnh viêm nhiễm phụ khoa không?",
    answer:
      "Zone Y Fresh là sản phẩm chăm sóc và hỗ trợ phòng ngừa, không phải là thuốc chữa bệnh. Bọt vệ sinh giúp làm sạch, kháng khuẩn nhẹ, làm dịu cảm giác ngứa ngáy và duy trì hệ vi sinh khỏe mạnh. Nếu bạn đang bị viêm nhiễm nặng, hãy sử dụng sản phẩm như một bước làm sạch phối hợp cùng phác đồ điều trị của bác sĩ chuyên khoa.",
  },
  {
    id: "foam-7",
    categoryId: "foam",
    question:
      "Cách sử dụng bọt vệ sinh Zone Y Fresh đúng chuẩn Y khoa là gì? Có nên thụt rửa sâu không?",
    answer: [
      "Tuyệt đối không thụt rửa sâu vào bên trong âm đạo vì có thể đưa vi khuẩn ngược vào trong và gây tổn thương niêm mạc.",
      "Bước 1: Làm ướt vùng kín bằng nước sạch.",
      "Bước 2: Nhấn vòi xịt lấy khoảng 1–2 lần bơm bọt vệ sinh Zone Y Fresh ra lòng bàn tay.",
      "Bước 3: Thoa rửa nhẹ nhàng lớp bọt mịn vào vùng bên ngoài (môi lớn, môi bé) từ trước ra sau trong khoảng 30–60 giây.",
      "Bước 4: Rửa lại thật sạch bằng nước và dùng khăn mềm lau khô nhẹ nhàng.",
    ].join("\n"),
  },
  {
    id: "foam-8",
    categoryId: "foam",
    question: "Có nên dùng bọt vệ sinh trước và sau khi quan hệ tình dục?",
    answer:
      "Rất nên dùng. Sử dụng bọt vệ sinh Zone Y Fresh trước và sau khi gần gũi giúp loại bỏ mồ hôi, dịch tiết, hạn chế nguy cơ lây nhiễm vi khuẩn chéo giữa hai người, đồng thời mang lại cảm giác sạch sẽ, tự tin và thoải mái cho cuộc yêu.",
  },
];

export const INTIMATE_HEALTH_QUESTIONS: FaqQuestion[] = [
  {
    id: "intimate-health-1",
    question: "Bị khô rát và đau khi gần gũi thì nên cải thiện thế nào?",
    answer:
      "Cảm giác đau rát là tín hiệu cho thấy vùng nhạy cảm đang bị thiếu độ ẩm tự nhiên và chưa sẵn sàng. Thay vì gồng mình chịu đựng hay dùng giải pháp tạm thời, bạn nên bắt đầu từ việc thả lỏng tinh thần và dành thêm thời gian dạo đầu. Hằng ngày, hãy làm sạch nhẹ nhàng bằng sản phẩm dịu nhẹ để không làm trôi lớp màng ẩm tự nhiên, kết hợp thoa tinh chất dưỡng chuyên dụng để khơi dậy cơ chế tự tiết độ ẩm mượt từ bên trong.",
  },
  {
    id: "intimate-health-2",
    question:
      "Vùng Y bị giảm độ đàn hồi và kém thăng hoa sau sinh hoặc do tuổi tác có phục hồi được không?",
    answer:
      "Hoàn toàn phục hồi được bạn nhé. Sau khi sinh hoặc theo thời gian, độ săn chắc và nhạy cảm suy giảm là diễn biến sinh lý rất bình thường. Bạn có thể kết hợp tập Kegel hằng ngày để cơ sàn chậu khỏe hơn, đồng thời sử dụng các dòng serum dưỡng trẻ hóa. Việc nuôi dưỡng tế bào tại chỗ đúng cách sẽ giúp niêm mạc phục hồi độ mọng mượt, tăng độ co bóp và gọi lại cảm xúc nồng nàn mà không cần can thiệp phẫu thuật.",
  },
  {
    id: "intimate-health-3",
    question: "Vùng kín hay có mùi hôi hoặc ngứa ngáy nhẹ thì xử lý ra sao?",
    answer:
      "Mùi hôi hay ngứa nhẹ thường do môi trường tự nhiên ở vùng Y bị mất cân bằng. Việc cần làm ngay là dừng các loại xà phòng hay sữa tắm thông thường vì chúng có độ tẩy rửa quá mạnh. Bạn hãy chuyển sang dùng bọt rửa chuyên dụng có độ pH chuẩn sinh lý để bảo vệ lợi khuẩn. Ngoài ra, nhớ mặc đồ lót thoáng khí và giữ vùng Y luôn khô thoáng nhé!",
  },
  {
    id: "intimate-health-4",
    question: "Các sản phẩm chăm sóc vùng Y có an toàn khi quan hệ bằng miệng (Oral Sex) không?",
    answer:
      "Cực kỳ an toàn nếu bạn chọn đúng các dòng chăm sóc đạt chuẩn. Hãy ưu tiên những sản phẩm lành tính, thuần chay, không chứa cồn, hương liệu nhân tạo hay chất tạo màu/vị. Khi sản phẩm đảm bảo độ an toàn cho làn da nhạy cảm nhất, bạn và đối phương hoàn toàn có thể tự nhiên tận hưởng trọn vẹn những phút giây gần gũi.",
  },
  {
    id: "intimate-health-5",
    question: "Căng thẳng công việc làm giảm ham muốn thì có giải pháp nào hỗ trợ không?",
    answer:
      "Áp lực tinh thần khiến cơ thể bị gồng cứng, làm cản trở lưu thông máu và dập tắt cảm xúc. Bên cạnh việc dành ra 15–20 phút tắm nước ấm để thả lỏng, bạn có thể dùng thêm vài giọt tinh chất dưỡng trước khi gần gũi. Cảm giác the mát nhẹ nhàng và độ trơn mượt tức thì sẽ giúp đánh thức các giác quan, đưa cơ thể vào trạng thái rạo rực tự nhiên dù một ngày qua có mệt mỏi đến đâu.",
  },
  {
    id: "intimate-health-6",
    question: "Sử dụng các liệu pháp phục hồi vùng Y có nguy cơ bị phụ thuộc không?",
    answer: `Hoàn toàn không. Các phương pháp chăm sóc sinh học hoạt động theo cơ chế "nuôi dưỡng và chữa lành" để cơ thể tự phục hồi, chứ không thay thế chức năng tự nhiên. Khi vùng nhạy cảm được cấp đủ dưỡng chất và khỏe mạnh trở lại, cơ thể sẽ tự vận hành trơn tru. Bạn hoàn toàn có thể ngưng dùng mà không lo bị phụ thuộc.`,
  },
  {
    id: "intimate-health-7",
    question: "Đang bị viêm nhiễm hoặc phải đặt thuốc phụ khoa thì cần lưu ý gì?",
    answer: `Trong thời gian điều trị, vùng Y đang rất nhạy cảm và tổn thương. Bạn chỉ nên dùng bọt rửa dịu nhẹ để làm sạch phía ngoài, giữ cho khu vực này luôn khô thoáng. Tuyệt đối không thoa hay bơm bất kỳ dưỡng chất nào vào sâu bên trong. Sau khi điều trị xong đợt thuốc theo chỉ định của bác sĩ, đó mới là "thời điểm vàng" để bắt đầu dùng tinh chất dưỡng phục hồi lại lớp màng bảo vệ tự nhiên.`,
  },
  {
    id: "intimate-health-8",
    question: "Phụ nữ giai đoạn tiền mãn kinh bị khô cạn lâu năm thì khả năng phục hồi thế nào?",
    answer:
      "Dù ở độ tuổi nào, cơ thể phụ nữ vẫn luôn có khả năng đáp ứng tốt nếu được chăm sóc đúng cách. Ở tuổi tiền mãn kinh, sự khô cạn là tự nhiên nhưng hoàn toàn có thể cải thiện nhờ việc bổ sung dưỡng chất phục hồi trực tiếp tại chỗ. Việc chăm sóc đều đặn sẽ giúp nuôi dưỡng vùng niêm mạc mọng trở lại, đánh thức cơ thể tự tiết độ ẩm tự nhiên mà không lo tác dụng phụ toàn thân.",
  },
];
