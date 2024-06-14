// import { useState } from "react";
// import  PaystackButton  from "react-paystack";

// const Payment = () => {
//   const publicKey = "pk_test_c2d6659c203a06d8bc13f7483e1b411ec0203255";
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");
//   const [phonenumber, SetPhoneNumber] = useState("");

//   const componentProps = {
//     email,
//     amount,
//     metadata: {
//       name,
//       phonenumber,
//     },
//     publicKey,
//     text: "Payment",
//     onSuccess: () => alert("Payment Successful"),
//     onclose: () => alert("Are you sure you want to cancel payment?"),
//   };

//   const style = {
//     input:
//       "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none",
//     button: "block w-full p-[1em] bg-[#1369A1] text-white rounded-md",
//   };
//   return (
//     <div className="mt-[8em] mb-[6.5em]">
//       <div className="flex justify-center items-center">
//         <p className="text-[2em] text-slate-900 font-bold">
//           Make your payment here
//         </p>
//       </div>
//       <div className="max-w-md mx-auto  p-[2em]">
//         <input
//           className={style.input}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           value={name}
//           placeholder="full name"
//         />
//         <input
//           className={style.input}
//           onChange={(e) => setEmail(e.target.value)}
//           type="text"
//           value={email}
//           placeholder="email address"
//         />
//         <input
//           className={style.input}
//           onChange={(e) => setAmount(e.target.value)}
//           type="text"
//           value={amount}
//           placeholder="amount"
//         />
//         <input
//           className={style.input}
//           onChange={(e) => SetPhoneNumber(e.target.value)}
//           type="text"
//           value={phonenumber}
//           placeholder="phone number"
//         />
//         <PaystackButton
//           className={style.button} 
//           componentProps={componentProps}
//         />
//       </div>
//     </div>
//   );
// };

// export default Payment;
