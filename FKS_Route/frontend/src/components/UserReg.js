import {
    Form,
    useSearchParams,
    useActionData,
    useNavigation,
  } from 'react-router-dom';
export default function UserReg({method}) {const data = useActionData();
    const navigation = useNavigation();
  
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';
  
    return (
      <>
        <Form method="post">
        <h3 className="align-middle" style={{textAlign: 'center'}}>{isLogin ? 'Log in' : 'Register New Customer'}</h3>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {data && data.message && <p>{data.message}</p>}
         <div className="row mt-2">
            <div className="col mt-2">
              <label  htmlFor="firstName" className="form-label">First Name</label>
              <input
                required
                type="text"
                placeholder="First name"
                aria-label="First name"
                defaultValue="Mark"
                name="firstName"
                className="form-control"
              />          
            </div>
            <div className="col mt-2">
              <label  htmlFor="middelName" className="form-label">Middel Name</label>
              <input
                required
                type="text"
                placeholder="Middel name"
                defaultValue="Showrn"
                aria-label="Middel name"
                name="middelName"
                className="form-control"
              />          
            </div>
            <div className="col mt-2">
              <label  htmlFor="lastName" className="form-label">Last Name</label>
              <input
                required
                type="text"
                placeholder="Last name"
                defaultValue="Mark"
                aria-label="Last name"
                name="lastName"
                className="form-control"
              />            
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label  htmlFor="dateBirth" className="form-label">Date of Birth & Time</label>
              <input
                required
                type="datetime-local" 
                name="dateBirth"
                className="form-control"
              />          
            </div>
            <div className="col-md-4">
              <label  htmlFor="gender1" className="form-label">Gender</label>
              <input
                type="text"
                placeholder="Gender"
                name="gender"
                required
                defaultValue="ABC"
                aria-label="User Name"
                className="form-control"
              />          
            </div>
            <div className="col-md-4">
              <label  htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                placeholder="userName"
                name="userName"
                required
                defaultValue="ABC"
                aria-label="User Name"
                className="form-control"
              />            
            </div>
          </div>
          <div className="row mt-2">
            <div className="col mt-2">
              <label  htmlFor="dateBirth" className="form-label">Date of Place</label>
               <input
                  type="text"
                  placeholder="dateOfPlace"
                  name="datePlace"
                  required
                  defaultValue="ABC"
                  aria-label="Data Of Place"
                  className="form-control"
              />    
                    
            </div>
            <div className="col mt-2">
              <label  htmlFor="email" className="form-label">Email</label>
              <input
                required
                type="text"
                placeholder="E-mail"
                aria-describedby="inputGroupPrepend"
                name="email"
                className="form-control"
              />          
            </div>
            <div className="col mt-2">
              <label  htmlFor="dateOfPlace" className="form-label">Password</label>
              <input
                type="text"
                name="pwd"
                required
                aria-label="Last name"
                className="form-control"
              />            
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-8 mt-2">
              <label  htmlFor="dateBirth" className="form-label">Address</label>
               <input
                  type="text"
                  placeholder="Address"
                  name="address1"
                  required
                  defaultValue="ABC"
                  aria-label="Address"
                  className="form-control"
              />    
                    
            </div>
            <div className="col-md-4 mt-2">
              <label  htmlFor="dateOfPlace" className="form-label">Mobile No</label>
              <input
                type="text"
                placeholder="9500588595"
                name="mobileNo"
                required
                defaultValue="90586222568"
                aria-label="Last name"
                className="form-control"
              />            
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label  htmlFor="dateBirth" className="form-label">Address 2</label>
               <input
                  type="text"
                  placeholder="Address 2"
                  name="address2"
                  required
                  defaultValue="Pune"
                  aria-label="Address2"
                  className="form-control"
              />                        
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col">
              <label  htmlFor="city" className="form-label">City</label>
               <input
                  type="text"
                  placeholder="City"
                  name="city"
                  required
                  defaultValue="Mumbai"
                  aria-label="City"
                  className="form-control"
              />    
                    
            </div>
            <div className="col">
              <label  htmlFor="userName" className="form-label">State</label>
              <input
                required
                type="text"
                placeholder="State"
                aria-describedby="inputGroupPrepend"
                name="state"
                className="form-control"
              />          
            </div>
            <div className="col">
              <label  htmlFor="zip" className="form-label">Zip</label>
              <input
                type="text"
                placeholder="Jalgaon"
                name="zip"
                required
                defaultValue="425002"
                aria-label="Zip Code"
                className="form-control"
              />            
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-1 mt-2">
              <input className="form-check-input" type="checkbox" value="" id="formGridCheckbox"/>              
            </div>
            <div className="col-4 mt-2">
              <label className="form-check-label" htmlFor="formGridCheckbox">
               "Kindly fill the correct details"
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="mb-2">
              <div   style={{float: 'right'}}>                      
                  <button  disabled={isSubmitting}  className="btn btn-outline-secondary btn-lg">{isSubmitting ? 'Submitting...' : 'Pay & Get Kundali'}</button>
              </div>          
           </div>    
          </div>
      </Form>
      </>
    );
}
