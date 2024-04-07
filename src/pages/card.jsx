import { Card, Button } from 'antd';
import { CloudFilled, StarFilled, PhoneFilled } from '@ant-design/icons';

export default function MyCards() {
    return (
        <>
            <div className="layout">
                <Card className="card">
                    <CloudFilled style={{ color: 'white', fontSize: '24px', marginTop: '-35px' }} />
                    <Card.Meta
                        title="Exceptional Learning Experience"
                        description="Become an Vision Learning Explorer. Learn new cloud skills, pass quizzes, and earn accreditation badges."
                    />
                    <Button type="primary">Learn More</Button>
                </Card>
                <Card className="card">
                    <StarFilled style={{ color: 'white', fontSize: '24px', marginTop: '-35px' }} />
                    <Card.Meta
                        title="See what success looks like"
                        description="Discover how other Vision customers around the world are accelerating cloud adoption with hands-on training."
                    />
                    <Button type="primary">Learn More</Button>
                </Card>
                <Card className="card">
                    <PhoneFilled style={{ color: 'white', fontSize: '24px', marginTop: '-35px' }} />
                    <Card.Meta
                        title="Contact us"
                        description="Have questions? Connect with an Vision Center digital learning expert."
                    />
                    <Button type="primary">Learn More</Button>
                </Card>
            </div>
        </>
    );
}
