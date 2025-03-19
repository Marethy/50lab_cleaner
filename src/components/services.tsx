import { FiShoppingBag, FiStar, FiClock, FiPackage, FiZap } from 'react-icons/fi';
import { serviceImages } from '../config/images';

// Add type for image paths
type ImagePath = string;

export interface Service {
  id: number;
  name: string;
  price: string;
  icon: React.ComponentType;
  serviceInfo: string;
  time: string;
  procedure: string[];
  discount?: {
    type: string;
    amount: string;
    description: string;
  };
  beforeImage?: ImagePath;
  afterImage?: ImagePath;
}

// Add type guard for image paths
const isValidImagePath = (path: unknown): path is ImagePath => {
  return typeof path === 'string' && path.length > 0;
};

const services: Service[] = [
  {
    id: 1,
    name: 'Vệ Sinh Giày',
    price: '100.000đ',
    icon: FiShoppingBag,
    serviceInfo: 'Dịch vụ vệ sinh giày cơ bản giúp loại bỏ bụi bẩn, vết ố, và mùi hôi. Áp dụng cho mọi loại giày thông thường.',
    time: '2-5 ngày',
    discount: {
      type: 'student',
      amount: '50%',
      description: 'Giảm 50% cho học sinh, sinh viên'
    },
    procedure: [
      'Nhận giày',
      'Đánh giá tình trạng giày',
      'Làm sạch bề mặt giày bằng sản phẩm chuyên dụng',
      'Làm sạch đế giày và xử lý các vết ố vàng',
      'Kiểm tra chất lượng trước khi giao lại',
    ],
    beforeImage: serviceImages.regularShoes.before[0],
    afterImage: serviceImages.regularShoes.after[0]
  },

  {
    id: 2,
    name: 'Vệ Sinh Giày Luxury',
    price: '150.000đ',
    icon: FiStar,
    serviceInfo: 'Dịch vụ vệ sinh chuyên sâu dành riêng cho giày cao cấp (trị giá trên 10 triệu đồng). Sử dụng dung dịch an toàn, bảo vệ chất liệu.',
    time: '2-5 ngày',
    procedure: [
      'Nhận giày',
      'Kiểm tra chất liệu và tình trạng giày',
      'Làm sạch nhẹ nhàng bằng sản phẩm chuyên dụng cao cấp',
      'Chăm sóc, dưỡng da và phục hồi màu sắc giày',
      'Kiểm tra kỹ lưỡng trước khi giao lại',
    ],
    beforeImage: serviceImages.luxuryShoes.before[0],
    afterImage: serviceImages.luxuryShoes.after[0]
  },
  {
    id: 3,
    name: 'Vệ Sinh Túi/Ví',
    price: '100.000đ',
    icon: FiPackage,
    serviceInfo: 'Dịch vụ vệ sinh cơ bản giúp loại bỏ vết bẩn, khử mùi, và bảo vệ bề mặt túi/ví. Áp dụng cho các loại túi xách, ví da, và vải.',
    time: '2-5 ngày',
    procedure: [
      'Nhận túi/ví',
      'Đánh giá tình trạng bề mặt',
      'Làm sạch bên ngoài bằng dung dịch vệ sinh phù hợp',
      'Khử mùi và bảo dưỡng da (nếu có)',
      'Kiểm tra chất lượng tổng thể trước khi giao lại',
    ],
    beforeImage: serviceImages.regularBag.before[0],
    afterImage: serviceImages.regularBag.after[0]
  },
  {
    id: 4,
    name: 'Vệ Sinh Túi/Ví Luxury',
    price: '200.000-400.000đ',
    icon: FiStar,
    serviceInfo: 'Dịch vụ vệ sinh chuyên sâu cho túi/ví cao cấp (trị giá trên 10 triệu đồng). Sử dụng dung dịch nhập khẩu, bảo vệ chất liệu cao cấp.',
    time: '2-5 ngày',
    procedure: [
      'Nhận túi/ví',
      'Kiểm tra kỹ lưỡng chất liệu và tình trạng sản phẩm',
      'Làm sạch bề mặt bằng dung dịch chuyên dụng',
      'Bảo dưỡng, dưỡng ẩm và phục hồi màu sắc (nếu cần)',
      'Kiểm tra chi tiết để đảm bảo chất lượng trước khi hoàn thành',
    ],
    beforeImage: serviceImages.luxuryBag.before[0],
    afterImage: serviceImages.luxuryBag.after[0]
  },
  {
    id: 5,
    name: 'Ưu Tiên 24h',
    price: '30.000đ',
    icon: FiZap,
    serviceInfo: 'Dịch vụ ưu tiên hoàn thành trong 24 giờ, giúp khách hàng nhận lại sản phẩm nhanh chóng mà vẫn đảm bảo chất lượng vệ sinh.',
    time: '24 giờ',
    procedure: [
      'Nhận sản phẩm',
      'Đánh giá và thực hiện nhanh chóng toàn bộ quy trình vệ sinh',
      'Đảm bảo chất lượng và giao sản phẩm đúng hạn trong vòng 24 giờ',
    ],
    beforeImage: serviceImages.priority.image,
    afterImage: serviceImages.priority.image
  },
];

export const SHIPPING_INFO = {
  freeShippingArea: 'Làng đại học',
  otherAreasShippingFee: '30.000đ',
  luxuryThreshold: '10 triệu đồng'
};

export default services;
