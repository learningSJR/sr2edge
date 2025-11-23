import React from "react";
import Navbar from "../components/common/Navbar";
import { slides } from "../data/carousel";
import { Link } from "react-router-dom";
import ZoomFadeCarousel from "../components/common/ZoomFadeCarousel";
import {
  Phone,
  Megaphone,
  LogIn,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Truck,
  ShieldCheck,
  Tag,
  Headset,
} from "lucide-react";
import OurServices from "./OurServices";

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-4 p-6">
      <div className="grid w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 place-items-center">
        <Icon />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function FeatureStrip() {
  return (
    <section className="bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
          <Feature
            icon={Truck}
            title="Fast Delivery"
            text="For all orders over $120"
          />
          <Feature
            icon={ShieldCheck}
            title="Safe Payments"
            text="100% secure payment"
          />
          <Feature
            icon={Tag}
            title="Discount Coupons"
            text="Enjoy huge promotions"
          />
          <Feature
            icon={Headset}
            title="Quality Support"
            text="Dedicated 24/7 support"
          />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen text-gray-900 bg-white">
        <ZoomFadeCarousel slides={slides} />
        <FeatureStrip />
        <OurServices />
      </div>
    </>
  );
}

export default Home;
