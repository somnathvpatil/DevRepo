import {
    Form,
    useSearchParams,
    useActionData,
    useNavigation,
    useLoaderData
  } from 'react-router-dom';
export default function NewBlogPostForm() {
    const data = useActionData();
    const navigation = useNavigation();
    const resBlogData = useLoaderData();
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';
  
    return (
      <>
        <Form method="post">
        <div className="row mb-3 mt-3">
            <h3 className="align-middle" style={{textAlign: 'center'}}>{resBlogData.blogId ? 'Update ' : 'New'}Blog Post </h3>
            {data && data.errors && (
                <ul>
                {Object.values(data.errors).map((err) => (
                    <li key={err}>{err}</li>
                ))}
                </ul>
            )}
            {data && data.message && <p>{data.message}</p>}
         </div>   
          <div className="row mb-3 mt-3">
                <label htmlFor="blogByName" className="col-sm-2 col-form-label">PostByName</label>
                <div className="col-sm-8">
                    
                <select className="form-select" name="blogByName" defaultValue={resBlogData ? resBlogData.blogByName :'snehal'}>
                <option value='NotName'>please select Section</option>
                <option value="snehal">Snehal</option>
                <option value="somnath">Somnath</option>
                <option value="priyanka">Priyanka</option>
            </select>
                </div>
          </div>
          <div className="row mb-3 mt-3">
                <label htmlFor="blogDate" className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-8">
                    <input type='date' className="form-control" id="blogDate" name="blogDate" defaultValue={resBlogData ? resBlogData.blogDate :''}/>
                </div>
          </div>
          <div className="row mb-3 mt-3">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-8">
                <input className="form-control" id="title" name="title" defaultValue={resBlogData ? resBlogData.title :''}/>
            </div>
          </div>
          <div className="row mb-3 mt-3">
            <label htmlFor="section" className="col-sm-2 col-form-label">Section</label>
            <div className="col-sm-8">
            <select className="form-select" aria-label="please select Section" name="section" defaultValue={resBlogData ? resBlogData.section :'rT'}>
                <option value="NA">please select Section</option>
                <option value="rT">Right-Top</option>
                <option value="rB">Right-Bottom</option>
                <option value="lT">Left-Top</option>
                <option value="lB">Left-Bottom</option>
            </select>
            </div>
          </div>  
          <div className="row mb-3 mt-3">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-8">
                <textarea className="form-control" aria-label="With Description" name="description" defaultValue={resBlogData ? resBlogData.description :''}></textarea>
            </div>
          </div>              
          <div className="row mt-3">
            <div className="mb-2">
              <div   style={{float: 'right'}}>                      
                  <button  disabled={isSubmitting}  className="btn btn-outline-secondary btn-lg">
                      {resBlogData.blogId ? 'Update ' : 'New'}Blog Post
                  </button>
              </div>          
           </div>    
          </div>
      </Form>
      </>
    );
}
