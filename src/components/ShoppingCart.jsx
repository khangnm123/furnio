import { Divider, Table } from 'antd';
import './css/ListToCart.css'
const columns = [
    {
        imgae:"Hinh anh",
        dataIndex:"image",
    },
  {
    title: ' sản phẩm',
    dataIndex: 'name',
  },
  {
    title: 'số lượng',
    dataIndex: 'amount',
  },
  {
    title: 'giá tiền',
    dataIndex: 'price',
  },

];

const ListToCart = ({listProductCart}) => {

    const data = listProductCart && listProductCart.map((product,index) => {
        return {
            key: index+1,
          name: product.name,
          amount: 1,
          price: product.discoutedPrice,
          image:product.image
        }
    })
    
    console.log(data)
  return(<>
    <div className='listcart'>

        <Divider>Small size table</Divider>
    <Table columns={columns} dataSource={data} size="small" pagination={{hideOnSinglePage: true , pageSize:5}} />
    <button>Tinh Tien</button>
    </div>
    
  </>)
};
export default ListToCart;