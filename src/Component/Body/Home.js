import Carousel from 'react-bootstrap/Carousel';
import Services from './Services';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
    return (
        <>
        <Carousel className='container-fluid'>
            <Carousel.Item interval={1500} >
                {/* <ExampleCarouselImage text="First slide" /> */}
                <img src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=ais" style={{ width: "100%", height: "100vh" }} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <img src="https://www.globalheatingairconditioning.com/wp-content/uploads/2019/07/Untitled-design.png" style={{ width: "100%", height: "100vh" }} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img src="https://greenerideal.com/wp-content/uploads/2021/07/business-opportunities-in-solar-1.jpg" style={{ width: "100%", height: "100vh" }} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    <div>
        <Services/>
    </div>
    </>
    );
}

export default IndividualIntervalsExample;