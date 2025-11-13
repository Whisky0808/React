import { useParams } from "react-router-dom";
export default function Profile() {
    const params = useParams();
    console.log("profileId:", params.profileId);
    // exact and match the parameter from the url

  return (
    // 整体框架不变，只改变中间的内容用的同一个template
    <div>
      <h2>Profile Page</h2>
      <p>{params.profileId}</p> 
    </div>
  );
}