import { Divider, Table } from 'antd';
import './css/ListToCart.css'
const columns = [
  {
    title: ' Sản phẩm',
    dataIndex: 'name',
  },
  {
    title: 'Số lượng',
    dataIndex: 'amount',
  },
  {
    title: 'Giá tiền',
    dataIndex: 'price',
  },
  {
    title: 'Giảm giá',
    dataIndex: 'discout',
  },
  {
    title: 'Còn Lại',
    dataIndex: 'remaining',
  },
];

const ListToCart = ({listProductCart}) => {
      const totalPrice = listProductCart.reduce((price , product)=> price + product.amount * product.discoutedPrice , 0)
    const data = listProductCart && listProductCart.map((product,index) => {
        return {
            key: index ,
          name: product.name,
          amount: 1,
          price: product.price,
          discout:product.discouter,
          remaining:product.discoutedPrice ,
        }
    })
    
    console.log(data)
  return(<>
    <div className='listcart'>
      <Divider>Shopping Cart</Divider>
    <Table columns={columns} dataSource={data} size="small" pagination={{hideOnSinglePage: true , pageSize:5}} />
      <div className='sum'>
        Total:
        ${totalPrice}
      </div>
    </div>
    
  </>)
};
export default ListToCart;