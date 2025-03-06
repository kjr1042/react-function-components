import logo from './logo.svg';
import './App.css';
import Greetings from "./Components/Greetings";
import GreetingForTheDay from './Components/GreetingForTheDay';
import WithPropComponenet from './Components/WithPropComponenet';
import PropTypes from 'prop-types';

function TopComponent() {
  return (
    <div>
      <h1>
        This is Top Component...
      </h1>
    </div>
  );
}

function MiddleComponent() {
  return (
    <div>
      <h1>
        This is Middle Component...
      </h1>
    </div>
  );
}

function BottomComponent() {
  return (
    <div>
      <h1>
        This is Bottom Component...
      </h1>
    </div>
  );
}

function ShowDetails({ userName }) {
  return (
    <div>
      <h1>
        Hello, {userName}
      </h1>
    </div>
  );
}

function Header() {
  return (
    <div>
      {25 * 25}
    </div>
  );
}

function MyFunctionComponenet() {
  return (
    <div>
      <h1>
        This is my normal function component..
      </h1>
    </div>
  );
}

const MyArrowFunctionComponent = () => {
  return (
    <div>
      <h1>
        This is my Arrow Function Component..
      </h1>
    </div>
  );

}

const customers = [
  {
    customerId: 1001,
    customerName: "Harsh Raj",
    customerType: "GOLD",
    sinceMemeber: new Date(),
    activeStatus: true,
  },
  {
    customerId: 1002,
    customerName: "Chilla Sravani",
    customerType: "GOLD",
    sinceMemeber: Date(),
    activeStatus: true,
  },
  {
    customerId: 1003,
    customerName: "Sandhya Rani",
    customerType: "GOLD",
    sinceMemeber: Date(),
    activeStatus: true,
  },
];

const ShowCustomerDetails = ({ customers }) => {
  console.log(customers);
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>customerId</th>
            <th>customerName</th>
            <th>customerType</th>
            <th>sinceMemeber</th>
            <th>activeStatus</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr>
              <td>{customer.customerId}</td>
              <td>{customer.customerName}</td>
              <td>{customer.customerType}</td>
              <td>{customer.sinceMemeber.toString()}</td>
              <td>{customer.activeStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const product = { productId: 101, productName: 'smart phone' }

var productCategory = "Electronics Products";

const ShowProductDetails = ({ product, category }) => {
  return (
    <div>
      <div>{category}</div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{product.productId}</h4>
          <p className="card-text">{product.productName}</p>
          <a href="#" className="card-link">
            product details
          </a>
          <a href="#" className="card-link">
            edit details
          </a>
        </div>
      </div>
    </div>
  );
};

const productName ="mobile";
const rating = 5;

function App() {
  return (
    <div className="App">
      <TopComponent />
      <MiddleComponent />
      <BottomComponent />
      <ShowDetails userName="Abishek" />
      <Header />
      <MyFunctionComponenet />
      <MyArrowFunctionComponent />
      <ShowCustomerDetails customers={customers} />
      <ShowProductDetails product={product} category={productCategory} />
      <Greetings/>
      <GreetingForTheDay name ="pawan"/>
      <WithPropComponenet productName={productName} rating={rating}/>

    </div>
  );
}

export default App;
