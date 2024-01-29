import "./Searchonpage.css"
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
function Search(){
    return<>

            <div className="search_acc">
                <Input className="search_input" placeholder=" Search here..." prefix={<SearchOutlined style={{ color: '#1A96D4', marginLeft: '32px', fontSize: '20px' }} />}

                />

            </div>
          


    </>
}

export default Search ;