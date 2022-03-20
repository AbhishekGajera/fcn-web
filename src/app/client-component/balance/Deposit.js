import React from 'react'
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import Withdraw from './Withdraw';

const Deposit = () => {
    const [show, setShow] = React.useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
    mode: "onChange"
  });
  const onSubmit = async (data) => {
  console.log(data);
  };
 
  return (
    <div>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Deposit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row">
        <div className="col-12 ">
          <div className="card">
            <div className="card-body">
              <form className="form-sample"   onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Enter Amount</label>
                      <div className="col-sm-9">
                      <Form.Control type="text" placeholder="Enter Amount"
                       name="deposit"
                       {...register("deposit", { required: true })}/>
                      </div>
                    </Form.Group>
                  </div>
                </div>
             
              
               
                <div className='text-center'>
                      <button
                          className="btn  btn-primary btn-sm font-weight-medium auth-form-btn "
                          type="submit"
                         
                      >
                        SUBMIT
                      </button>
                      
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </Modal.Body>
     
    
    </Modal>
    
   
      <div className="page-header">
        <h3 className="page-title"> Balance </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Balance</a></li>
            <li className="breadcrumb-item active" aria-current="page">Balance</li>
          </ol>
        </nav>
      </div>
     <div className="row">
     <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
              <h4 className="font-weight-normal mb-4">Deposit <i className="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
                              
                              
          <button type="button" className="btn btn-gradient-primary btn-fw mb-2 center" onClick={handleShow}>Click Here</button>


            </div>
          </div>
        </div>
       <Withdraw/>
        
     </div>
    </div>
  )
}

export default Deposit