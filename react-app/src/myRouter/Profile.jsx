import { NavLink } from "react-router-dom";
// link back to the homepage/root page, instead of useing the Link component
export default function Profile() {
    const profilePages = [1,2,3,4,5];
  return (
    <div className={{display:'flex',flexDirection:'column'}}>
      <h2>Profile Navigation</h2>
      {
        profilePages.map((page)=>{
            return (
                <NavLink style={{display:'flex',flexDirection:'column'}} id={page} key={page} to={`/profile/${page}`}>
                    Profile {page}
                </NavLink>
            )
        })
      }
    </div>
  );
}