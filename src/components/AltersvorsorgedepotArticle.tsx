import Image from "next/image";
import Link from "next/link";

type SupportExample = {
  title: string;
  description: string;
  basic: string;
  contribution: string;
  totals: string[];
  sums: string[];
};

const childSupport = ["300 €", "600 €", "900 €", "1.200 €"];

const supportExamples: SupportExample[] = [
  {
    title: "Ví dụ",
    description: "Mỗi tháng đóng 30€/ tháng (360€/ năm) để hưởng mức trợ cấp 50%.",
    basic: "180 €",
    contribution: "360 €",
    sums: ["480 €", "780 €", "1.080 €", "1.380 €"],
    totals: ["780 €", "1.140 €", "1.440 €", "1.740 €"],
  },
  {
    title: "Ví dụ 2",
    description: "Mỗi tháng đóng 150€/ tháng (1.800€/ năm) để hưởng mức trợ cấp tối đa.",
    basic: "540 €",
    contribution: "1.800 €",
    sums: ["840 €", "1.140 €", "1.440 €", "1.740 €"],
    totals: ["2.640 €", "2.940 €", "3.240 €", "3.540 €"],
  },
];

function SupportTable({ example }: { example: SupportExample }) {
  const rows: { label: string; values: string[] }[] = [
    { label: "Grundzulage/ Hỗ trợ cơ bản", values: Array(4).fill(example.basic) },
    { label: "Kinderzulagen/ Hỗ trợ con", values: childSupport },
    { label: "Summe der Zulagen/ Tổng hỗ trợ", values: example.sums },
    { label: "Eigenbeitrag/ Tiền đóng góp", values: Array(4).fill(example.contribution) },
  ];

  const labelCell = "bg-[#deeaf6] px-3 py-2.5 align-top font-normal sm:px-4 sm:py-3";
  const valueCell = "px-3 py-2.5 align-top whitespace-nowrap sm:px-4 sm:py-3";

  return (
    <div className="mt-12">
      <p>
        <strong>{example.title}:</strong> {example.description}
      </p>
      <div className="mt-8 overflow-x-auto lg:pl-[10%]">
        <table className="w-full min-w-[600px] border-separate border-spacing-[3px] text-left text-xl">
          <thead>
            <tr className="bg-brand-gold text-white">
              <th className="w-[38%] px-3 py-3 font-bold sm:px-4">Zusammensetzung</th>
              <th colSpan={4} className="px-3 py-3 text-center font-bold sm:px-4">
                Förderung / Mức hỗ trợ <span className="font-normal">(jährlich/ năm)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={labelCell}>Kinder/ Con</th>
              {[1, 2, 3, 4].map((n) => (
                <td key={n} className={`${valueCell} bg-[#cfd4dc] text-center`}>
                  {n}
                </td>
              ))}
            </tr>
            {rows.map((row, rowIndex) => (
              <tr key={row.label}>
                <th className={labelCell}>{row.label}</th>
                {row.values.map((value, i) => (
                  <td key={i} className={`${valueCell} ${rowIndex % 2 === 0 ? "bg-[#e6e9ed]" : "bg-[#cfd4dc]"}`}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="font-bold text-[#0070c0]">
              <th className={`${labelCell} !font-bold`}>Gesamtförderung und Eigenbeitrag/ Tổng cộng</th>
              {example.totals.map((value, i) => (
                <td key={i} className={`${valueCell} bg-[#e6e9ed]`}>
                  {value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AltersvorsorgedepotArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[48%_52%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-2xl">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Chủ động tài chính -<br />An nhiên tuổi già
            </h1>
            <p className="mt-8 text-2xl font-bold leading-snug">
              Các chương trình Hưu trí có hỗ trợ của nhà nước
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/pdf-field-house.jpeg"
            alt="Chủ động tài chính cho tuổi già"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold uppercase leading-tight">
            Quỹ đầu tư hưu trí - Altersvorsorgedepot
          </h2>

          <h3 className="mt-12 text-3xl font-bold">Tổng quát các đặc điểm của sản phẩm</h3>

          <h4 className="mt-8 text-[1.15rem] font-bold leading-snug sm:text-[1.35rem]">Giai đoạn tích lũy</h4>
          <p className="mt-4">
            Với các giải pháp hưu trí mới, đáp ứng những nhu cầu khác nhau về <strong>lợi nhuận</strong> và{" "}
            <strong>mức độ an toàn</strong>, người tham gia có thể lựa chọn giữa các phương án{" "}
            <strong>không có bảo đảm</strong> và có mức <strong>bảo đảm 80% hoặc 100%</strong>. Nhờ đó, người
            tham gia có thể chọn một giải pháp hưu trí phù hợp với mong muốn và mục tiêu cá nhân của mình.
          </p>

          <h4 className="mt-10 text-[1.15rem] font-bold leading-snug sm:text-[1.35rem]">Giai đoạn nhận quyền lợi</h4>
          <p className="mt-4">Người tham gia có thể lựa chọn giữa các hình thức chi trả sau:</p>
          <ul className="mt-4 list-disc space-y-1 pl-6 sm:pl-10">
            <li>
              <strong>Lương hưu trọn đời truyền thống</strong>
            </li>
            <li>
              <strong>Lương hưu trọn đời gắn với diễn biến của thị trường vốn</strong>
            </li>
            <li>
              <strong>Kế hoạch chi trả định kỳ</strong> cho đến khi khách hàng đủ 85 tuổi.
            </li>
            <li>
              Có thể <strong>rút tối đa 30% số vốn tích lũy</strong> tại thời điểm bắt đầu nhận lương hưu.
            </li>
          </ul>
          <p className="mt-4">
            Ngoài ra, số vốn tích lũy cũng có thể được sử dụng thế chấp để{" "}
            <strong>
              mua bất động sản phục vụ nhu cầu ở của bản thân, thanh toán khoản vay mua nhà hoặc cải tạo, sửa
              chữa bất động sản
            </strong>{" "}
            mà khách hàng tự sử dụng.
          </p>

          <h3 className="mt-12 text-3xl font-bold">Đối tượng đủ điều kiện nhận hỗ trợ của Nhà nước</h3>
          <p className="mt-4">
            <strong>Nhóm đối tượng đủ điều kiện nhận hỗ trợ của Nhà nước</strong> sẽ được mở rộng.
          </p>
          <p className="mt-4">
            Trong tương lai, không chỉ những người chủ yếu có nghĩa vụ đóng bảo hiểm hưu trí theo quy định vào
            hệ thống bảo hiểm hưu trí công lập mới được hưởng các khoản hỗ trợ của Nhà nước.
          </p>
          <p className="mt-4">
            Các nhóm đối tượng sau đây cũng sẽ được tiếp cận chính sách hỗ trợ của Nhà nước thông qua các giải
            pháp hưu trí mới:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 sm:pl-10">
            <li>
              <strong>Người tự kinh doanh</strong>
            </li>
            <li>
              <strong>Người hành nghề tự do</strong>
            </li>
            <li>
              <strong>Những người tham gia quỹ hưu trí nghề nghiệp</strong> (ví dụ: bác sĩ, luật sư và kiến
              trúc sư).
            </li>
          </ul>

          <h3 className="mt-12 text-3xl font-bold">Cơ chế hỗ trợ của Nhà nước</h3>
          <p className="mt-4">
            Trong tương lai, mức hỗ trợ sẽ được tính theo tỷ lệ tương ứng với số tiền đóng góp: Đối với{" "}
            <strong>360 EUR đầu tiên đóng góp mỗi năm</strong>, khách hàng sẽ nhận được mức hỗ trợ{" "}
            <strong>50%</strong>. Đối với phần đóng góp tiếp theo, cho đến mức tối đa <strong>1.800 EUR</strong>,
            khách hàng sẽ nhận thêm mức hỗ trợ <strong>25%</strong>. Như vậy, khách hàng có thể nhận được khoản
            trợ cấp cơ bản lên đến <strong>540 EUR mỗi năm</strong>.
          </p>
          <p className="mt-4">Ngoài ra:</p>
          <ul className="mt-4 list-disc space-y-1 pl-6 sm:pl-10">
            <li>
              Cha mẹ sẽ nhận được khoản <strong>trợ cấp trẻ em</strong> cho mỗi con, tương đương{" "}
              <strong>100% số tiền tự đóng góp</strong>, tối đa <strong>300 EUR mỗi năm cho mỗi trẻ</strong>.
            </li>
            <li>
              Những người dưới 25 tuổi tiếp tục được hưởng khoản{" "}
              <strong>thưởng dành cho người mới bắt đầu đi làm</strong> một lần, trị giá <strong>200 EUR</strong>.
            </li>
            <li>
              Điều kiện để được hưởng hỗ trợ là phải đóng góp tối thiểu <strong>120 EUR mỗi năm</strong>.
            </li>
          </ul>

          {supportExamples.map((example) => (
            <SupportTable key={example.title} example={example} />
          ))}

          <h3 className="mt-12 text-3xl font-bold">Các hợp đồng Riester hiện có</h3>
          <p className="mt-4">
            Những khách hàng đã ký kết hợp đồng{" "}
            <Link href="/cai-cach-che-do-huu-tri-tu-nhan-riester" className="text-[#44728c] underline hover:text-brand-gold">
              Riester
            </Link>{" "}
            trước đây đã sớm đưa ra một quyết định đúng đắn và có thể yên tâm trước những thay đổi trong chính
            sách cải cách.
          </p>
          <p className="mt-4">
            <strong>Quy định bảo vệ quyền lợi toàn diện đối với các hợp đồng hiện có</strong> mang lại cho khách
            hàng đang sở hữu hợp đồng Riester nhiều lựa chọn:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 sm:pl-10">
            <li>
              <strong>Tiếp tục duy trì hợp đồng hiện tại</strong> mà không cần thay đổi.
            </li>
            <li>
              <strong>Chuyển đổi sang cơ chế hỗ trợ mới</strong> của Nhà nước.
            </li>
            <li>
              <strong>Chuyển số vốn sang một sản phẩm hưu trí mới</strong>.
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
