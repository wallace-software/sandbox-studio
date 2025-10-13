import { FC } from "react";
import { Button, ProductListItem } from "@components";
import { fadeInUp, PRODUCT_LIST, stagger } from "@constants";
import { motion } from "framer-motion";

const ProductList: FC = () => {
  return (
    <motion.div
      className="landing-container col-centered"
      variants={stagger(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex flex-col-reverse xl:flex-row items-start justify-center gap-14 xl:gap-40 2xl:gap-64 vertical-padding">
        <motion.div
          className="flex flex-col gap-5 md:w-[410px] h-full justify-between"
          variants={fadeInUp}
        >
          <div className="flex flex-col gap-8">
            <p className="text-4xl md:text-5xl font-normal !leading-[1.3] tracking-wide md:min-w-[380px] font-primary hidden xl:block">
              Aesthetic digital products.
            </p>
            <p className="text-lg xl:text-xl font-regular !tracking-wide ">
              At Sandbox Studio, we specialize in providing best-in-class web
              design, brand design, and web development services, tailored to
              our individual client needs.
            </p>
          </div>
          <p className="text-lg xl:text-xl font-regular">
            Curious to learn more?
          </p>
          <Button
            title="Check full list of services"
            link="/services"
            className="!min-w-[306px] h-[48px]"
          />
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-10 w-full">
          <p className="text-4xl md:text-5xl font-normal !leading-[1.3] tracking-wide md:min-w-[380px] font-primary  xl:hidden pb-4">
            Aesthetic digital products.
          </p>
          <motion.p
            className="text-white/60 text-xl xl:text-3xl font-regular !tracking-wide font-primary -mb-4 xl:mb-0"
            variants={fadeInUp}
          >
            Our services.
          </motion.p>

          <motion.div className="flex flex-col w-full" variants={fadeInUp}>
            {PRODUCT_LIST.map((item, index) => (
              <div key={index}>
                <ProductListItem icon={item.icon} title={item.title} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductList;
