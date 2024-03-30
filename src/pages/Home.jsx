import AppSwiper from "../swiper/AppSwiper";
import MySwiperSlide from "../swiper/swiper_slide";
import GridImg from "../component/grid_imge";
import { Typography, Avatar, Button, Image } from 'antd';
import AvatarImg from '../imges/avatar.png';
import Photo6 from '../imges/6.jpeg';

const { Title, Paragraph } = Typography;


export default function Home() {
    return (
        <>
            <AppSwiper />
            <div className="text-box">
                <p className="get-connected">Get connected. Visit the Vision Center Learning Community.</p>
                <p className="Vision">
                    Vision Center communities provide access to experts, peers and practitioners that inspire innovation, celebrate successes and empower collaboration. Explore the benefits of membership.
                    <Button>Join Now</Button>
                </p>
            </div>
            <MySwiperSlide />
            <p className="Vision-Tranning">Vision Tranning Programming</p>
            <hr />
            <GridImg />
            <div className="button-container">
                <Button className="my-button">See All Courses</Button>
                <Button className="my-button">See All Courses</Button>
            </div>
            <div className="vision-center">
                <div className='text-vision'>
                    <span className="text-vision">Vision Center Podcast |</span>
                    <Button className="button">Join Now</Button>
                </div>
                <div className='Customer-success'>
                    <p className='title-Customer'>Customer success</p>
                    <p className='text-Customer'>Get  inspired by other companies who use Oracle Guided Learning and Oracle  Cloud Learning Subscriptions to accelerate cloud adoption, increase  productivity, reduce costs, and mitigate risks.</p>
                </div>
                <div className='Cultural-Enrichment'>
                    <Image
                        src={Photo6}
                        alt="Photo"
                        preview={false}
                        className='image6'
                    />
                    <div className='part-Cultural'>
                        <h4>Cultural Enrichment and Diversity</h4>
                        <p className='text-Cultural'>Creativity thrives in diverse environments where different perspectives intersect. By embracing creativity, nations celebrate their cultural diversity and heritage, fostering an environment conducive to artistic expression, cultural innovation, and cross-cultural collaboration.Creativity is a driving force behind entrepreneurship. When individuals harness their creative abilities to identify opportunities and develop innovative solutions, they contribute to economic growth by establishing new businesses, creating jobs, and stimulating markets.</p>
                        <Button>view the story</Button>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="content">
                    <Title level={6} className="title">Empowering Excellence</Title>
                    <div className="line" />
                    <Paragraph className="subtitle">Tailored Training Solutions with Exceptional Instructors</Paragraph>
                    <Paragraph className="paragraph">
                        Our training center features a distinguished teaching faculty committed to empowering individuals and organizations with transformative learning experiences. With industry experts and seasoned professionals, we tailor each training program to meet unique client needs, whether on-site or virtually. Experience the difference our exceptional instructors make in advancing your team's capabilities. Schedule a private training event with us today.
                    </Paragraph>
                    <Button type="primary" className="button">
                        GET STARTED
                    </Button>
                </div>
                <Avatar size={382} className="avatar" src={AvatarImg} />
            </div>
        </>
    )}