import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CarouselFunction() {
  return (
    <div >
      <Carousel className='w-100 ' fade style={{objectFit:'contain !importand'}}>
  <Carousel.Item className='w-100'>
    <img src='https://source.unsplash.com/random/300x300/?burger' alt="First slide" className="w-100" style={{ height: '50vh',filter: "brightness(30%)" }}/>
    <Carousel.Caption>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='w-100'>
    <img src='https://source.unsplash.com/random/300x300/?pizza' alt="Second slide" className="w-100" style={{ height: '50vh',filter: "brightness(30%)" }}/>
    <Carousel.Caption>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='text-white bg-success'>Search</Button>
          </Form>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='w-100'>
    <img src='https://source.unsplash.com/random/300x300/?samosa' alt="Third slide" className="w-100" style={{ height: '50vh',filter: "brightness(30%)" }}/>
    <Carousel.Caption>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  );
}

export default CarouselFunction;
