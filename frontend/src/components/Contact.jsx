// import React from "react";
// import { motion } from "framer-motion";
// import SH2 from "../assets/SH2.png";
// import icon3 from "../assets/icon3.png";
// import saf3 from "../assets/saf3.jpg";
// import icon from "../assets/icon.png";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { Phone } from "lucide-react";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const Contact = () => {
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = {
//   name: e.target.name.value,
//   phone: e.target.phone.value,
//   email: e.target.email.value,
//   subject: e.target.subject.value,
//   message: e.target.message.value,
// };


//   try {
//     await fetch("http://localhost:5000/api/leads", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     alert("Message sent successfully ✅");
//     e.target.reset();
//   } catch (err) {
//     console.error(err);
//     alert("Failed to send message ❌");
//   }
// };


//   return (
//     <div className="overflow-x-hidden">
//       {/* Top Section */}
//       <section className="bg-[#667D60] py-16 px-4 md:px-10 w-full">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
//           {/* Left Text */}
//           <motion.form
//             className="w-full"
//               onSubmit={handleSubmit}   // ← Add this!

//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInUp}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center md:text-left">
//               CONTACT US
//             </h2>
//             <p className="text-white leading-relaxed mb-6 text-center md:text-left text-sm md:text-base">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//               vestibulum urna augue. Duis sit amet maximus commodo hendrerit lorem
//               maximus mi.
//             </p>
//           </motion.form>

//           {/* Right Image */}
//           <motion.div
//             className="flex justify-center w-full"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <motion.img
//               src={SH2}
//               alt="spices"
//               className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </motion.div>
//         </div>

//         {/* Contact Form Section */}
//         <motion.div
//           className="bg-[#FDF6ED] py-12 mt-12 rounded-xl shadow-md px-4 md:px-10 w-full"
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           transition={{ duration: 1, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           {/* Decorative Leaf */}
//           <motion.img
//             src={icon}
//             alt="Leaf Right"
//             className="absolute right-6 -top-6 w-14 md:w-20 opacity-80 rotate-180"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.4 }}
//             viewport={{ once: true }}
//           />

//           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 w-full">
//             {/* Left Info */}
//             <motion.div
//               className="flex flex-col items-center text-center w-full"
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInUp}
//               transition={{ duration: 1, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-2xl md:text-3xl font-bold mb-6">Ask us</h2>
//               <motion.img
//                 src={saf3}
//                 alt="blog"
//                 className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-lg mb-4"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <p className="text-sm md:text-base text-white bg-[#667D60] px-4 py-2 rounded-md max-w-sm">
//                 We're here to help! If you have any questions about our website
//                 please email <b>web@email.com</b>, fill out the form or call{" "}
//                 <b>+44 650.800.3124</b>. <br />
//                 Monday to Friday, 10am-5pm
//               </p>
//             </motion.div>

//             {/* Right Form */}
//             <motion.form
//   className="space-y-4 w-full"
//   onSubmit={handleSubmit}   // ← Add this to properly handle form submit
//   initial="hidden"
//   whileInView="visible"
//   variants={{
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   }}
//   viewport={{ once: true }}
// >
//   {[
//   { placeholder: "NAME", name: "name" },
//   { placeholder: "PHONE", name: "phone" },
//   { placeholder: "E-MAIL", name: "email" },
//   { placeholder: "SUBJECT", name: "subject" },
// ].map((field, i) => (
//   <motion.input
//     key={i}
//     type="text"
//     name={field.name}        // ✅ add this
//     placeholder={field.placeholder}
//     className="w-full bg-[#667D60] text-white px-4 py-3 rounded-md focus:outline-none"
//     variants={fadeInUp}
//     transition={{ duration: 0.8 }}
//   />
// ))}


//   <motion.textarea
//   name="message"
//     placeholder="MESSAGE"
//     rows="4"
//     className="w-full bg-[#667D60] text-white px-4 py-3 rounded-md focus:outline-none"
//     variants={fadeInUp}
//     transition={{ duration: 0.8 }}
//   ></motion.textarea>

//   <motion.button
//     type="submit"   // Ensure button is submit type
//     className="bg-[#667D60] hover:bg-[#4e5f48] transition-colors duration-300 text-white px-6 py-3 w-full rounded-md font-semibold"
//     variants={fadeInUp}
//     transition={{ duration: 0.8 }}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     SEND MESSAGE
//   </motion.button>
// </motion.form>

//           </div>
//         </motion.div>
//       </section>

//       {/* Info Cards */}
//       <section className="py-16 px-6 md:px-10 bg-[#667D60] text-white w-full">
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
//           {[
//             {
//               icon: <FaMapMarkerAlt className="text-3xl mx-auto text-[#667D60]" />,
//               title: "Location",
//               text: "123 Main Street, Tech City, India",
//             },
//             {
//               icon: <FaPhoneAlt className="text-3xl mx-auto text-[#667D60]" />,
//               title: "Call Us Anytime",
//               text: "+91 9542108787",
//             },
//             {
//               icon: <FaEnvelope className="text-3xl mx-auto text-[#667D60]" />,
//               title: "Send Us Email",
//               text: "Swachh.co",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-[#FDF6ED] p-8 rounded-lg text-center hover:shadow-2xl transition w-full"
//             >
//               {item.icon}
//               <h3 className="text-xl mt-4 mb-2 text-black font-semibold">{item.title}</h3>
//               <p className="text-[#667D60] text-sm md:text-base">{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Google Map */}
//       <motion.section
//         className="w-full h-80 md:h-96"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <iframe
//           className="w-full h-full"
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.389664134884!2d73.91534917506523!3d18.555330582557347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10d0d8d3c0f%3A0x71e18571c68cd55!2sPune%20University!5e0!3m2!1sen!2sin!4v1690900347051!5m2!1sen!2sin"
//           loading="lazy"
//           allowFullScreen
//         ></iframe>
//       </motion.section>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import SH2 from "../assets/SH2.png";
import icon3 from "../assets/icon3.png";
import saf3 from "../assets/saf3.jpg";
import icon from "../assets/icon.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Phone } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
  name: e.target.name.value,
  phone: e.target.phone.value,
  email: e.target.email.value,
  subject: e.target.subject.value,
  message: e.target.message.value,
};


  try {
    await fetch("http://localhost:5000/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Message sent successfully ✅");
    e.target.reset();
  } catch (err) {
    console.error(err);
    alert("Failed to send message ❌");
  }
};


  return (
    <div className="overflow-x-hidden">
      {/* Top Section */}
      <section className="bg-[#667D60] py-16 px-4 md:px-10 w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
          {/* Left Text */}
          <motion.form
            className="w-full"
              onSubmit={handleSubmit}   // ← Add this!

            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center md:text-left">
              CONTACT US
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl mb-4">
        At <span className="font-semibold">SWACCHH</span>, we bring you the purity of nature through our 
        two premium products — <strong>Saffron</strong> and <strong>Shilajit</strong>.  
        Whether you’re curious about our sourcing process, looking for bulk orders, 
        or need product support, we’re always ready to assist you.
      </p>
          </motion.form>

          {/* Right Image */}
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={SH2}
              alt="spices"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          className="bg-[#FDF6ED] py-12 mt-12 rounded-xl shadow-md px-4 md:px-10 w-full"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Decorative Leaf */}
          <motion.img
            src={icon}
            alt="Leaf Right"
            className="absolute right-6 -top-6 w-14 md:w-20 opacity-80 rotate-180"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
          />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 w-full">
            {/* Left Info */}
            <motion.div
              className="flex flex-col items-center text-center w-full"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ask us</h2>
              <motion.img
                src={saf3}
                alt="blog"
                className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-sm md:text-base text-white bg-[#667D60] px-4 py-2 rounded-md max-w-sm">
  We're here to help! If you have any questions about our website
  please email{" "}
  <a href="mailto:web@email.com" className="underline font-bold">
    web@email.com
  </a>, fill out the form or call{" "}
  <a href="tel:+919160213146" className="underline font-bold">
    +91 9160213146
  </a>.
  <br />
  Monday to Friday, 10am-5pm
</p>
            </motion.div>

            {/* Right Form */}
            <motion.form
  className="space-y-4 w-full"
  onSubmit={handleSubmit}   // ← Add this to properly handle form submit
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }}
  viewport={{ once: true }}
>
  {[
  { placeholder: "NAME", name: "name" },
  { placeholder: "PHONE", name: "phone" },
  { placeholder: "E-MAIL", name: "email" },
  { placeholder: "SUBJECT", name: "subject" },
].map((field, i) => (
  <motion.input
    key={i}
    type="text"
    name={field.name}        // ✅ add this
    placeholder={field.placeholder}
    className="w-full bg-[#667D60] text-white px-4 py-3 rounded-md focus:outline-none"
    variants={fadeInUp}
    transition={{ duration: 0.8 }}
  />
))}


  <motion.textarea
  name="message"
    placeholder="MESSAGE"
    rows="4"
    className="w-full bg-[#667D60] text-white px-4 py-3 rounded-md focus:outline-none"
    variants={fadeInUp}
    transition={{ duration: 0.8 }}
  ></motion.textarea>

  <motion.button
    type="submit"   // Ensure button is submit type
    className="bg-[#667D60] hover:bg-[#4e5f48] transition-colors duration-300 text-white px-6 py-3 w-full rounded-md font-semibold"
    variants={fadeInUp}
    transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    SEND MESSAGE
  </motion.button>
</motion.form>

          </div>
        </motion.div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-6 md:px-10 bg-[#667D60] text-white w-full">
        <div className="max-w-7xl mx-auto font-semibold grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {[
            {
              icon: <FaMapMarkerAlt className="text-3xl mx-auto text-[#667D60]" />,
              title: "Location",
              text: "Padmaja Nagar, Vemana Colony, Chanda Nagar, Hyderabad, Telangana 500050",
            },
            {
              icon: <FaPhoneAlt className="text-3xl mx-auto text-[#667D60]" />,
              title: "Call Us Anytime",
              text: "+91 9160213146",
            },
            {
              icon: <FaEnvelope className="text-3xl mx-auto text-[#667D60]" />,
              title: "Send Us Email",
              text: "Swachh.co",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#FDF6ED] p-8 rounded-lg text-center hover:shadow-2xl transition w-full"
            >
              {item.icon}
              <h3 className="text-xl mt-4 mb-2 text-black font-semibold">{item.title}</h3>
              <p className="text-[#667D60] text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Google Map */}
      <motion.section
        className="w-full h-80 md:h-96"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          className="w-full h-full"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.113867826299!2d78.31492171421365!3d17.507952300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c569872445%3A0x4306e7494dd99f95!2sThe%20Swacchh%20Products!5e0!3m2!1sen!2sin!4v1694359812345!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </motion.section>
    </div>
  );
};

export default Contact;