import {Card , Button, CardBody} from 'react-bootstrap'

function ProductItem({product}){
    return(
        <Card className='card-bg'>
            <Card.Body>
                <Card.Img
                variant='top'
                src={product.image}
                height='250px'
                style={{objectFit:'cover'}}
                />
                <Card.Title align='right' className='text-light pt-4'>{product.Title}</Card.Title>
                <Card.Text align='right' className='text-light '>{product.Text}</Card.Text>
                <Button variant='btn btn-outline-secondary' className='text-white'>افزودن</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductItem