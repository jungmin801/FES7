import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
          <Link to="/"> home </Link>
          <Link to="/products/1"> 상세페이지1 </Link>
          <Link to="/products/2"> 상세페이지2 </Link>
          <Link to="/products/3"> 상세페이지3 </Link>
          <Link to="/cart"> 장바구니 </Link>
          <Link to="/users"> 고객정보 </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:id" element={<ProductDetailPage />}/>
        {/* <Route path="/products/:id/notice" element={<ProductNotice/>}></Route> */}
        <Route path="/products/:id/*" element={<Outlet/>}>
            <Route path="notice/" element={<ProductNotice/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/users/*" element={<Outlet/>}>
            <Route path="" element={<Users/>}/>
            <Route path="coupon/" element={<Coupon/>}/>
            <Route path="question/" element={<Question/>}/>
            <Route path="notice/" element={<Notice/>}/>
        </Route> */}
        <Route path="/users/*" element={<Users/>}>
            <Route path="coupon/" element={<Coupon/>}/>
            <Route path="question/" element={<Question/>}/>
            <Route path="notice/" element={<Notice/>}/>
        </Route>
      </Routes>
      <Buttons/>
    </BrowserRouter>
  );
}

const Buttons = () =>{
    const navigate = useNavigate();
    return <button onClick={()=>{navigate("/user")}}>유저 페이지 바로가기</button>
}

const Home = () => {
    return <div>메인 홈 화면 입니다.</div>
};

const ProductDetailPage = () => {
    const { id } = useParams();
    return <div>{id}번 디테일 페이지입니다.</div>;
  };

const Cart = () => {
    return <div>장바구니 페이지입니다.</div>
}

const Users = ()=>{
    return (
        <div>
            <div>고객정보 페이지입니다.</div>
            <Outlet/>
        </div>
    )   
}

const Coupon = ()=>{
    return <div>쿠폰 페이지입니다.</div>
}

const Question = ()=>{
    return <div>질문 페이지입니다.</div>
}

const Notice = ()=>{
    return <div>개인 공지 페이지입니다.</div>
}

const ProductNotice = ()=>{
    return <div>상품 공지 페이지입니다.</div>
}



export default App;