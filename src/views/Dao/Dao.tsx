
import { MetaTags } from "@components/shared";
import { Header, List} from "./components";

const Dao = () => {
    return (
        <div className="bg-c-bg">
          {/* Page heading */}
          <MetaTags title="DAO" description="decentralized autonomous organization" />
          <Header/>
          <List/>
        
        </div>
    )
}

export default Dao;