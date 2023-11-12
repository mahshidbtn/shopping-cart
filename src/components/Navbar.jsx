import { useState } from 'react';
import {Navbar as NavbarBs , Button , Modal, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'
import {BsCart} from 'react-icons/bs'


function Navbar(){
    const [showModal,setShowModal] = useState(false)

    const handleShow = () => {setShowModal(true)}
    const handleClose = () => {setShowModal(false)}


    return(
        <>
            <NavbarBs className='border-bottom border-secondary'>
                <NavbarBs.Collapse className='justify-content-end'>
                    <Button onClick={handleShow} variant='btn btn-outline-secondary' className='text-white'>
                        <BsCart className='mx-2'></BsCart>
                        سبد خرید</Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal 
            show={showModal} 
            onHide={handleClose}
            contentClassName='card-bg'
            dir='rtl'
            >
                <ModalHeader closeButton closeVariant='white'>
                    <ModalTitle>سبد خرید</ModalTitle>
                    <ModalBody>محصول</ModalBody>
                </ModalHeader>
            </Modal>
        </>
    )
}

export default Navbar;