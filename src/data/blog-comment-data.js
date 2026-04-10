import user_1 from '@assets/img/users/user-2.jpg';
import user_2 from '@assets/img/users/user-3.jpg';
import user_3 from '@assets/img/users/user-4.jpg';


// blog comment data 
const comment_data = [
  {
    id: 1,
    user: user_1,
    name: 'Lance Bogrol',
    date: '12 Tháng 4, 2023 lúc 15:50',
    desc: 'Khi quy trình nội bộ và đối ngoại được thiết lập rõ ràng, đội ngũ sẽ biết cách phân bổ nguồn lực để thu hút và giữ chân khách hàng hiệu quả hơn.',
    children:{
      user: user_2,
      name: 'Dasy Lily',
      date: '15 Tháng 4, 2023 lúc 17:50',
      desc: 'Đồng ý, đặc biệt với thương mại điện tử thì chuẩn hóa quy trình chăm sóc khách sẽ giúp tăng tỷ lệ quay lại mua hàng.',
    }
  },
  {
    id: 2,
    user: user_3,
    name: 'Shahnewaz Sakil',
    date: '20 Tháng 4, 2023 lúc 15:50',
    desc: 'Bài viết rất thực tế. Mình đã áp dụng vài bước và thấy việc phối hợp giữa marketing và vận hành mượt hơn hẳn.',
  },
]

export default comment_data;