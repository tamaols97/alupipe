import Breadcumbs from "@/app/components/commons/breadcrumbs";
import SubHero from "@/app/components/commons/sub_hero";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";
import { stringDashToShiftDash } from "@/utilities";
import Catalogs from "@/app/components/products/catalogs";
import { getProduct } from "@/app/contents/actions";
import eye_icon from "../../../../public/product/eye-solid.svg";
import qr_zalo from "../../../../public/product/qr-zalo.png";
import Image from "next/image";

export default async function Product({ params: { slug, lang } }) {
  const { products, product_screen } = await getDictionary(lang);
  const entity = products[stringDashToShiftDash(slug)];
  const _product = await getProduct(stringDashToShiftDash(slug), lang);
  if (!_product) return <section>404</section>;

  if (!entity)
    return (
      <section>
        <SubHero></SubHero>
        <p className="text-center text-lg mt-8">404</p>
      </section>
    );

  if (slug == "ALCOTOP") {
    return (
      <section>
        <SubHero title={product_screen.title_detail}></SubHero>
        <div className="mx-auto px-4 py-4 grid grid-cols-1 gap-4 md:px-8 lg:grid-cols-4 lg:gap-8">
          <UpdateInfoCard />
          <div className="lg:col-span-4">
            <Breadcumbs></Breadcumbs>
          </div>
          <div className="lg:col-span-3 bg-grey-100 shadow-lg p-4 min-h-96 md:px-8">
            <h1 className="pt-0 text-lg text-ellipsis font-medium">ALCOTOP</h1>
            <h2 className="text-xl font-semibold mt-6">I. GIỚI THIỆU</h2>
            <p className="mt-4 text-justify">
              ALCOTOP là thương hiệu Tấm Aluminium Composite Panel (ACP) hàng
              đầu tại Hàn Quốc và Việt Nam được thành lập và phát triển bởi Công
              ty TNHH World Mech’ Tech’. Với hơn 30 năm kinh nghiệm phục vụ
              khách hàng trên toàn thế giới, bằng những sản phẩm và dịch vụ tốt
              nhất, cùng các giải pháp hữu ích nhất, Alcotop đã thiết lập hệ
              thống sản phẩm tối ưu, đáp ứng các bộ tiêu chí đánh giá về chất
              lượng sản phẩm và dịch vụ chăm sóc khách hàng chu đáo.
            </p>
            <p className="mt-4 text-justify">
              Cho đến nay, sản phẩm tấm ốp thương hiệu ALCOTOP đã xuất khẩu sang
              hơn 50 quốc gia trên thế giới và được chứng nhận bởi nhiều quốc
              gia phát triển tại EU, Nhật Bản, Singapore…
            </p>
            <p className="mt-4 text-justify">
              Để đáp ứng nhu cầu ngày càng tăng đối với ACP, đặc biệt là ở các
              thị trường tiềm năng như Việt Nam và các nước ASEAN (Lào,
              Campuchia, Myanmar…), vào năm 2012, ALCOTOP đã thành lập một nhà
              máy mới tại Huyện Bến Cát, Tỉnh Bình Dương và bắt đầu sản xuất ACP
              từ năm 2013.
            </p>
            <p className="mt-4 text-justify">
              ALCOTOP luôn cam kết với khách hàng của mình cung cấp “ALCOTOP”
              với chất lượng tốt nhất, dịch vụ tốt nhất và giá cả cạnh tranh
              nhất.
            </p>
            <p className="mt-4 text-justify">
              ALCOTOP luôn tự tin cam kết sản phẩm đứng đầu trên thị trường bởi
              những lí do sau:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>
                Lớp phủ: Bề mặt ALCOTOP được phủ một lớp nhựa PVDF trên nền
                KYNAR 500 (hơn 70%) được bảo hành trên 20 năm bởi P.P.G – Thương
                hiệu số 1 thế giới.
              </li>
              <li>
                Nhôm: ALCOTOP sử dụng hợp kim nhôm 3003H nhập khẩu từ Hàn Quốc
                với chất lượng cực cao giúp tránh rạn nứt khi uốn, chống ăn mòn.
              </li>
              <li>
                Lõi: ALCOTOP sử dụng Polyethylen nguyên sinh (PE) chất lượng
                cao, nhập khẩu từ Hàn Quốc.
              </li>
              <li>
                Khả năng chống cháy và các chứng chỉ: ALCOTOP FR đạt tiêu chuẩn
                chịu lửa và chống cháy cấp độ B1, A2 của nhiều nước trên thế
                giới, đặc biệt tấm ACP chống cháy của chúng tôi đã đạt tiêu
                chuẩn thử nghiệm ASTM E119 và NFPA 285 của Hoa Kỳ.
              </li>
              <li>
                Bảo hành: ALCOTOP cam kết bảo hành tối thiểu 20 năm cho tất cả
                các sản phẩm của chúng tôi.
              </li>
              <li>
                Thời gian giao hàng và dịch vụ hỗ trợ: Với lợi thế nhà máy đặt
                tại Bình Dương, Việt Nam và đội ngũ hỗ trợ kỹ thuật tận tình,
                Alcotop cam kết cung cấp hàng hóa đáp ứng yêu cầu về chất lượng
                trong thời gian ngắn nhất với giá cả cạnh tranh.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">
              II. THÔNG SỐ KỸ THUẬT
            </h2>
            <table className="w-full mt-4 border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Thương hiệu
                  </td>
                  <td className="border border-gray-300 p-2">Alcotop</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Độ dày
                  </td>
                  <td className="border border-gray-300 p-2">4mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Kích thước chiều rộng
                  </td>
                  <td className="border border-gray-300 p-2">
                    1020mm, 1250mm, 1575mm
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Kích thước chiều dài
                  </td>
                  <td className="border border-gray-300 p-2">
                    2450mm → 8000mm
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Đơn vị tính
                  </td>
                  <td className="border border-gray-300 p-2">M2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Độ dày lớp nhôm
                  </td>
                  <td className="border border-gray-300 p-2">0.5mm x 2 mặt</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Xuất xứ
                  </td>
                  <td className="border border-gray-300 p-2">
                    Nhà máy sản xuất chính hãng tại Bình Dương, Việt Nam hoặc từ
                    Hàn quốc
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Lớp sơn phủ
                  </td>
                  <td className="border border-gray-300 p-2">PVDF</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Bề mặt sơn
                  </td>
                  <td className="border border-gray-300 p-2">2 lớp, 3 lớp</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">
                    Tính năng vượt trội
                  </td>
                  <td className="border border-gray-300 p-2">
                    chống ẩm, cách nhiệt, chống bám bụi, kháng lửa
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-semibold mt-6">
              III. ƯU ĐIỂM CỦA TẤM ỐP NHÔM ALCOTOP
            </h2>
            <ul className="list-disc list-inside mt-4">
              <li>
                Khả năng chịu nhiệt: gấp 3 lần so với chất liệu làm từ thép.
              </li>
              <li>
                Khả năng tiêu âm cực lớn, giúp chúng ta cảm thấy yên tĩnh hơn
                trong những ngày mưa gió, không cảm thấy ồn khi trời mưa to như
                các loại thép hay mái tôn khác.
              </li>
              <li>
                Khả năng chống thấm: tính chống ăn mòn của tấm ốp Alcotop cao và
                có khả năng thích ứng với thời tiết, chịu được tác động ở mức
                nền nhiệt từ -50 độ C → 80 độ C.
              </li>
              <li>
                Vật liệu nhẹ, bền, dễ thi công: Trọng lượng của tấm được chỉ
                bằng ½ trọng lượng của tấm nhôm đồng chất cùng bề dày và có độ
                cứng tương đương lẫn nhau. Dễ dàng cắt hay tạo hình chúng thành
                những hình dạng khác nhau, phù hợp với nhiều loại kiến trúc hiện
                đại, cũng chính tính năng này có thể giúp chúng ta dễ dàng thi
                công như cưa, cắt, khoan lỗ hay uốn cong mà không lo bị bong hay
                trầy xước tấm nhôm.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1 flex flex-col items-center">
            <ContactCard />
            <QRCard />
            <ProductListCard />
          </div>
        </div>
      </section>
    );
  }
  if (slug == "STEEL-PIPE-FOR-PIPING") {
    return (
      <section>
        <SubHero title={product_screen.title_detail}></SubHero>
        <div className="mx-auto px-4 py-4 grid grid-cols-1 gap-4 md:px-8 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-3">
            <Breadcumbs></Breadcumbs>
          </div>
          {/* <div className="lg:col-span-2 bg-grey-100 shadow-md p-4 min-h-96 md:p-8">
            <h1 className="text-lg text-ellipsis font-medium">DONGYANG</h1>
            <h2 className="text-xl font-semibold mt-6">II. Ưu điểm</h2>
            <p className="mt-4 text-justify">
              {entity.content}
              {entity.content2}
            </p>
          </div> */}
          <div className="lg:col-span-1">
            <Catalogs lang={lang} items={_product.catalogs}></Catalogs>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <SubHero title={product_screen.title_detail}></SubHero>
      <div className="mx-auto px-8 py-4 lg:container grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-3">
          <Breadcumbs></Breadcumbs>
        </div>
        <div className="lg:col-span-2 bg-grey-100 shadow-md p-4 min-h-96 md:p-8">
          <h1 className="text-lg text-ellipsis font-medium">{entity.title}</h1>
          <p className="whitespace-pre-wrap">
            {entity.content}
            {entity.content2}
          </p>
        </div>
        <div className="lg:col-span-1">
          <Catalogs lang={lang} items={_product.catalogs}></Catalogs>
        </div>
      </div>
    </section>
  );
}

const UpdateInfoCard = () => {
  return (
    <div className="lg:col-span-4 flex flex-col md:flex-row items-center text-sm text-gray-800 p-4 border border-gray-300 ">
      <span className="text-red-600 font-bold mb-2 md:mb-0 md:mr-4">
        Cập nhật Mới:
      </span>
      <span className="mb-2 md:mb-0 md:mr-4">Posted on 27/08/2024 |</span>
      <span className="italic mb-2 md:mb-0 md:mr-4">by Tran Lam Hoang</span>
      <span className="font-bold flex">
        <Image className="w-3 mr-1" src={eye_icon} alt="Views Icon" />
        <span>3568 lượt xem</span>
      </span>
    </div>
  );
};
const ContactCard = () => {
  return (
    <div>
      <div className="w-full text-center py-4  bg-blue-900 text-white">
        Hotline Tư Vấn
      </div>
      <div className=" flex flex-col items-center text-center gap-1 border border-solid border-gray-400 p-4">
        <p>Tư vấn & Báo giá</p>
        <p className="font-bold mb-2">0857489576</p>
        <p>Email liên hệ</p>
        <p className="font-bold">alupipevn@gmail.com</p>
        <p className="font-bold mb-2">dattt@alupipe.com.vn</p>
        <p>Địa chỉ</p>
        <p className="font-bold">
          16, Street 04, Him Lam Residential Area, District 07, Ho Chi Minh City
        </p>
      </div>
    </div>
  );
};
const QRCard = () => {
  return (
    <div>
      <div className="w-full text-center py-4 mt-4 bg-blue-900 text-white">
        Quét mã QR, nhắn tin bằng Zalo trên điện thoại:
      </div>
      <Image
        className="border boder-solid  border-gray-400 w-full px-10 py-10"
        src={qr_zalo}
      />
    </div>
  );
};
const ProductListCard = () => {
  return (
    <div className="w-full">
      <div className="w-full text-center py-4 mt-4 bg-blue-900 text-white">
        Danh mục sản phẩm
      </div>
      <div className="border boder-solid  border-gray-400 pl-0 bg-gray-50">
        <ul className="flex flex-col text-left list-none">
          <li className="border-b-[1px] border-solid border-gray-400 py-3 transition-colors duration-100 hover:bg-gray-200">
            <a className="ml-1 font-semibold" href="/products/ALCOTOP">
              ALCOTOP
            </a>
          </li>
          <li className="border-b-[1px] border-solid border-gray-400 py-3 transition-colors duration-100 hover:bg-gray-200">
            <a
              className="ml-1 font-semibold"
              href="/products/STEEL-PIPE-FOR-PIPING"
            >
              DONGYANG
            </a>
          </li>
          <li className="border-b-[1px] border-solid border-gray-400 py-3 transition-colors duration-100 hover:bg-gray-200">
            <a className="ml-1 font-semibold" href="/products/PV-PIPE-1">
              PV PIPE
            </a>
          </li>
          <li className="py-3 transition-colors duration-100 hover:bg-gray-200">
            <a
              className="ml-1 font-semibold"
              href="/products/STEEL-HUSTEEL-KOREA"
            >
              HUSTEEL
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
