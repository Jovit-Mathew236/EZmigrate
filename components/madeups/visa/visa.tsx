"use client";
import PageHeader from "@/components/shared/page-header";
import { pageHeaders } from "@/types/page-headers";
import { Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import React, { useState } from "react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const destinationCards = [
  {
    country: "New Zealand",
    countryCode: "NZ",
    visaType: [
      "Visit Visa",
      "Work Visa",
      "Student Visa",
      "PR Visa",
      "Post-Study Work Visa",
      "Parent Visa",
      "Family Visa",
    ],
    link: "/visa/new-zealand/[visa-type]",
  },
  {
    country: "Australia",
    countryCode: "DE",
    visaType: [
      "Visitor Visa",
      "Working Visa",
      "Student Visa",
      "PR Visa",
      "Post-study Work Visa",
      "Parent Visa",
      "Family Visa",
    ],
    link: "/visa/australia/[visa-type]",
  },
  // {
  //   country: "Canada",
  //   countryCode: "CA",
  //   visaType: [
  //     "Student Visa",
  //     "PR Visa",
  //     "Post-Study Work Visa",
  //     "Parent Visa",
  //     "Family Visa",
  //     "Visitor Visa",
  //   ],
  //   link: "/visa/canada/[visa-type]",
  // },
  // {
  //   country: "USA",
  //   countryCode: "US",
  //   visaType: [
  //     "Student Visa",
  //     "PR Visa",
  //     "Post-Study Work Visa",
  //     "Parent Visa",
  //     "Family Visa",
  //     "Visitor Visa",
  //   ],
  //   link: "/visa/usa/[visa-type]",
  // },
];

const processSteps = [
  {
    id: 1,
    title: "Inquiry",
    description:
      "Begin your journey with EZMigrate. Connect with us to start the process.",
    icon: (
      <path
        d="M7.36364 23.3182C7.36364 21.6907 8.01014 20.1299 9.16094 18.9791C10.3117 17.8283 11.8725 17.1818 13.5 17.1818C15.1275 17.1818 16.6883 17.8283 17.8391 18.9791C18.9899 20.1299 19.6364 21.6907 19.6364 23.3182C19.6364 24.9456 18.9899 26.5065 17.8391 27.6572C16.6883 28.808 15.1275 29.4545 13.5 29.4545C11.8725 29.4545 10.3117 28.808 9.16094 27.6572C8.01014 26.5065 7.36364 24.9456 7.36364 23.3182ZM13.5 20.8636C12.849 20.8636 12.2247 21.1222 11.7644 21.5826C11.3041 22.0429 11.0455 22.6672 11.0455 23.3182C11.0455 23.9692 11.3041 24.5935 11.7644 25.0538C12.2247 25.5141 12.849 25.7727 13.5 25.7727C14.151 25.7727 14.7753 25.5141 15.2356 25.0538C15.6959 24.5935 15.9545 23.9692 15.9545 23.3182C15.9545 22.6672 15.6959 22.0429 15.2356 21.5826C14.7753 21.1222 14.151 20.8636 13.5 20.8636ZM13.5 34.3636C11.8725 34.3636 10.3117 35.0101 9.16094 36.1609C8.01014 37.3117 7.36364 38.8725 7.36364 40.5C7.36364 42.1275 8.01014 43.6883 9.16094 44.8391C10.3117 45.9899 11.8725 46.6364 13.5 46.6364C15.1275 46.6364 16.6883 45.9899 17.8391 44.8391C18.9899 43.6883 19.6364 42.1275 19.6364 40.5C19.6364 38.8725 18.9899 37.3117 17.8391 36.1609C16.6883 35.0101 15.1275 34.3636 13.5 34.3636ZM11.0455 40.5C11.0455 39.849 11.3041 39.2247 11.7644 38.7644C12.2247 38.3041 12.849 38.0455 13.5 38.0455C14.151 38.0455 14.7753 38.3041 15.2356 38.7644C15.6959 39.2247 15.9545 39.849 15.9545 40.5C15.9545 41.151 15.6959 41.7753 15.2356 42.2356C14.7753 42.6959 14.151 42.9545 13.5 42.9545C12.849 42.9545 12.2247 42.6959 11.7644 42.2356C11.3041 41.7753 11.0455 41.151 11.0455 40.5ZM24.5455 22.7045C24.5455 22.2163 24.7394 21.7481 25.0846 21.4028C25.4299 21.0576 25.8981 20.8636 26.3864 20.8636H44.7955C45.2837 20.8636 45.7519 21.0576 46.0972 21.4028C46.4424 21.7481 46.6364 22.2163 46.6364 22.7045C46.6364 23.1928 46.4424 23.661 46.0972 24.0063C45.7519 24.3515 45.2837 24.5455 44.7955 24.5455H26.3864C25.8981 24.5455 25.4299 24.3515 25.0846 24.0063C24.7394 23.661 24.5455 23.1928 24.5455 22.7045ZM26.3864 38.0455C25.8981 38.0455 25.4299 38.2394 25.0846 38.5846C24.7394 38.9299 24.5455 39.3981 24.5455 39.8864C24.5455 40.3746 24.7394 40.8428 25.0846 41.1881C25.4299 41.5333 25.8981 41.7273 26.3864 41.7273H44.7955C45.2837 41.7273 45.7519 41.5333 46.0972 41.1881C46.4424 40.8428 46.6364 40.3746 46.6364 39.8864C46.6364 39.3981 46.4424 38.9299 46.0972 38.5846C45.7519 38.2394 45.2837 38.0455 44.7955 38.0455H26.3864ZM7.36364 10.4318C7.36364 9.94358 7.55759 9.47534 7.90283 9.1301C8.24806 8.78486 8.71631 8.59091 9.20455 8.59091H44.7955C45.2837 8.59091 45.7519 8.78486 46.0972 9.1301C46.4424 9.47534 46.6364 9.94358 46.6364 10.4318C46.6364 10.9201 46.4424 11.3883 46.0972 11.7335C45.7519 12.0788 45.2837 12.2727 44.7955 12.2727H9.20455C8.71631 12.2727 8.24806 12.0788 7.90283 11.7335C7.55759 11.3883 7.36364 10.9201 7.36364 10.4318ZM9.20455 0C6.76335 0 4.42214 0.969762 2.69595 2.69595C0.969762 4.42214 0 6.76335 0 9.20455V44.7955C0 47.2367 0.969762 49.5779 2.69595 51.3041C4.42214 53.0302 6.76335 54 9.20455 54H44.7955C47.2367 54 49.5779 53.0302 51.3041 51.3041C53.0302 49.5779 54 47.2367 54 44.7955V9.20455C54 6.76335 53.0302 4.42214 51.3041 2.69595C49.5779 0.969762 47.2367 0 44.7955 0H9.20455ZM3.68182 9.20455C3.68182 7.73983 4.26368 6.3351 5.29939 5.29939C6.3351 4.26368 7.73983 3.68182 9.20455 3.68182H44.7955C46.2602 3.68182 47.6649 4.26368 48.7006 5.29939C49.7363 6.3351 50.3182 7.73983 50.3182 9.20455V44.7955C50.3182 46.2602 49.7363 47.6649 48.7006 48.7006C47.6649 49.7363 46.2602 50.3182 44.7955 50.3182H9.20455C7.73983 50.3182 6.3351 49.7363 5.29939 48.7006C4.26368 47.6649 3.68182 46.2602 3.68182 44.7955V9.20455Z"
        fill="black"
      />
    ),
  },
  {
    id: 2,
    title: "Expert Counseling",
    description:
      "Our experienced counselors provide personalized advice to guide you through the visa process.",
    icon: (
      <path
        d="M27 1.92857C27 1.41708 26.7968 0.926543 26.4351 0.564865C26.0735 0.203188 25.5829 0 25.0714 0C24.5599 0 24.0694 0.203188 23.7077 0.564865C23.346 0.926543 23.1429 1.41708 23.1429 1.92857V2.57143H8.35714C6.14069 2.57143 4.01502 3.45191 2.44775 5.01918C0.880482 6.58645 0 8.71212 0 10.9286V35.3571C0 37.5736 0.880482 39.6993 2.44775 41.2665C4.01502 42.8338 6.14069 43.7143 8.35714 43.7143H14.5234L10.7306 48.2657C10.4032 48.6589 10.2455 49.166 10.292 49.6755C10.3385 50.1849 10.5855 50.6551 10.9787 50.9824C11.3719 51.3098 11.879 51.4675 12.3885 51.421C12.8979 51.3745 13.3681 51.1274 13.6954 50.7343L19.5429 43.7143H28.5634C29.0188 42.1513 29.994 40.7906 31.3277 39.8571H8.35714C7.16367 39.8571 6.01908 39.383 5.17516 38.5391C4.33125 37.6952 3.85714 36.5506 3.85714 35.3571V10.9286C3.85714 8.44457 5.87314 6.42857 8.35714 6.42857H43.0714C45.5554 6.42857 47.5714 8.44457 47.5714 10.9286V24.7551C48.7623 25.5844 49.735 26.6893 50.4066 27.9756C51.0783 29.262 51.4289 30.6917 51.4286 32.1429V10.9286C51.4286 9.8311 51.2124 8.74437 50.7924 7.73043C50.3724 6.7165 49.7569 5.79521 48.9808 5.01918C48.2048 4.24315 47.2835 3.62756 46.2696 3.20758C45.2556 2.78759 44.1689 2.57143 43.0714 2.57143H27V1.92857ZM10.2857 14.7857C10.2857 14.2742 10.4889 13.7837 10.8506 13.422C11.2123 13.0603 11.7028 12.8571 12.2143 12.8571H22.5C23.0115 12.8571 23.502 13.0603 23.8637 13.422C24.2254 13.7837 24.4286 14.2742 24.4286 14.7857C24.4286 15.2972 24.2254 15.7877 23.8637 16.1494C23.502 16.5111 23.0115 16.7143 22.5 16.7143H12.2143C11.7028 16.7143 11.2123 16.5111 10.8506 16.1494C10.4889 15.7877 10.2857 15.2972 10.2857 14.7857ZM12.2143 20.5714C11.7028 20.5714 11.2123 20.7746 10.8506 21.1363C10.4889 21.498 10.2857 21.9885 10.2857 22.5C10.2857 23.0115 10.4889 23.502 10.8506 23.8637C11.2123 24.2254 11.7028 24.4286 12.2143 24.4286H28.9286C29.4401 24.4286 29.9306 24.2254 30.2923 23.8637C30.654 23.502 30.8571 23.0115 30.8571 22.5C30.8571 21.9885 30.654 21.498 30.2923 21.1363C29.9306 20.7746 29.4401 20.5714 28.9286 20.5714H12.2143ZM10.2857 30.2143C10.2857 29.7028 10.4889 29.2123 10.8506 28.8506C11.2123 28.4889 11.7028 28.2857 12.2143 28.2857H26.3571C26.8686 28.2857 27.3592 28.4889 27.7208 28.8506C28.0825 29.2123 28.2857 29.7028 28.2857 30.2143C28.2857 30.7258 28.0825 31.2163 27.7208 31.578C27.3592 31.9397 26.8686 32.1429 26.3571 32.1429H12.2143C11.7028 32.1429 11.2123 31.9397 10.8506 31.578C10.4889 31.2163 10.2857 30.7258 10.2857 30.2143ZM48.8571 32.1429C48.8571 33.8478 48.1798 35.483 46.9743 36.6885C45.7687 37.8941 44.1335 38.5714 42.4286 38.5714C40.7236 38.5714 39.0885 37.8941 37.8829 36.6885C36.6773 35.483 36 33.8478 36 32.1429C36 30.4379 36.6773 28.8028 37.8829 27.5972C39.0885 26.3916 40.7236 25.7143 42.4286 25.7143C44.1335 25.7143 45.7687 26.3916 46.9743 27.5972C48.1798 28.8028 48.8571 30.4379 48.8571 32.1429ZM54 45.9643C54 49.9654 50.6931 54 42.4286 54C34.164 54 30.8571 49.9809 30.8571 45.9643V45.6994C30.8571 43.1794 32.8989 41.1429 35.4163 41.1429H49.4409C51.9609 41.1429 54 43.182 54 45.6994V45.9643Z"
        fill="black"
      />
    ),
  },
  {
    id: 3,
    title: "Eligibility",
    description:
      "Sign up to determine your eligibility for the visa you wish to apply for.",
    icon: (
      <path
        d="M18.9189 0.756967C19.3893 0.272281 20.0272 0 20.6923 0C21.3574 0 21.9953 0.272281 22.4656 0.756967L28.7364 7.22044C29.2066 7.70527 29.4708 8.36275 29.4708 9.0483C29.4708 9.73386 29.2066 10.3913 28.7364 10.8762L22.4656 17.3396C22.2343 17.5866 21.9575 17.7835 21.6515 17.919C21.3454 18.0545 21.0163 18.1259 20.6833 18.1288C20.3502 18.1318 20.0199 18.0664 19.7117 17.9364C19.4034 17.8064 19.1233 17.6144 18.8878 17.3717C18.6523 17.1289 18.4661 16.8403 18.34 16.5225C18.2138 16.2048 18.1504 15.8644 18.1533 15.5211C18.1562 15.1778 18.2253 14.8385 18.3568 14.5231C18.4883 14.2077 18.6794 13.9224 18.9189 13.6839L20.8202 11.7216C17.5328 12.0622 14.4053 13.352 11.7973 15.4427C9.18918 17.5335 7.20635 20.3402 6.07664 23.5405C4.94693 26.7408 4.71619 30.2047 5.41094 33.5341C6.10569 36.8635 7.69773 39.9232 10.0041 42.3618C12.3105 44.8003 15.2376 46.5186 18.449 47.3191C21.6604 48.1197 25.0257 47.97 28.1583 46.8874C31.2909 45.8047 34.0635 43.833 36.1576 41.1988C38.2516 38.5646 39.5821 35.3749 39.9961 31.9962C40.0297 31.6533 40.1295 31.3208 40.2896 31.0182C40.4497 30.7156 40.6669 30.449 40.9284 30.2342C41.1899 30.0194 41.4905 29.8607 41.8124 29.7673C42.1343 29.674 42.471 29.6479 42.8028 29.6907C43.1346 29.7334 43.4548 29.8441 43.7445 30.0163C44.0342 30.1884 44.2876 30.4185 44.4897 30.6931C44.6919 30.9676 44.8387 31.2811 44.9217 31.615C45.0046 31.9489 45.0219 32.2965 44.9726 32.6374C44.4386 37.0103 42.7106 41.1369 39.9899 44.537C37.2691 47.9371 33.6675 50.4708 29.6041 51.8432C25.5407 53.2156 21.1827 53.3702 17.0374 52.2892C12.8921 51.2081 9.12986 48.9357 6.18866 45.7366C3.24746 42.5375 1.24824 38.5431 0.423697 34.2184C-0.40085 29.8938 -0.0168134 25.4167 1.53111 21.3082C3.07903 17.1997 5.72717 13.6289 9.16732 11.0113C12.6075 8.3937 16.6981 6.837 20.9632 6.52238L18.9189 4.4127C18.4487 3.92787 18.1845 3.27039 18.1845 2.58484C18.1845 1.89928 18.4487 1.2418 18.9189 0.756967ZM33.1259 21.4401C33.5961 21.9249 33.8603 22.5824 33.8603 23.2679C33.8603 23.9535 33.5961 24.611 33.1259 25.0958L21.8386 36.73C21.3682 37.2147 20.7303 37.487 20.0652 37.487C19.4001 37.487 18.7622 37.2147 18.2918 36.73L13.2753 31.5593C13.0357 31.3208 12.8446 31.0355 12.7131 30.7201C12.5817 30.4046 12.5125 30.0654 12.5096 29.7221C12.5067 29.3788 12.5702 29.0384 12.6963 28.7206C12.8224 28.4029 13.0087 28.1142 13.2442 27.8715C13.4797 27.6287 13.7597 27.4368 14.068 27.3068C14.3763 27.1768 14.7065 27.1114 15.0396 27.1143C15.3726 27.1173 15.7018 27.1887 16.0078 27.3241C16.3138 27.4596 16.5906 27.6566 16.822 27.9035L20.0652 31.2464L29.5792 21.4401C30.0495 20.9554 30.6874 20.6831 31.3525 20.6831C32.0176 20.6831 32.6555 20.9554 33.1259 21.4401Z"
        fill="black"
      />
    ),
  },
  {
    id: 4,
    title: "Documentation",
    description:
      "We assist in compiling and organizing all necessary documents to create a strong and compelling application.",
    icon: (
      <path
        d="M4.81818 9.81818V49.0909H48.1818V54H4.81818C3.54032 54 2.3148 53.4828 1.41121 52.5622C0.507629 51.6415 0 50.3929 0 49.0909V9.81818H4.81818ZM36.1364 17.1818H49.3864L36.1364 3.68182V17.1818ZM14.4545 0H38.5455L53 14.7273V39.2727C53 40.5747 52.4924 41.8233 51.5888 42.744C50.6852 43.6646 49.4597 44.1818 48.1818 44.1818H14.4545C13.1767 44.1818 11.9512 43.6646 11.0476 42.744C10.144 41.8233 9.63636 40.5747 9.63636 39.2727V4.90909C9.63636 3.60712 10.144 2.35847 11.0476 1.43784C11.9512 0.517206 13.1767 0 14.4545 0ZM14.4545 4.90909V39.2727H48.1818V22.0909H31.3182V4.90909H14.4545Z"
        fill="black"
      />
    ),
  },
  {
    id: 5,
    title: "Processing",
    description:
      "Your complete application is prepared and submitted with precision for a seamless processing experience.",
    icon: (
      <>
        <path
          d="M16.2233 15.9184H5.20289C4.55338 15.9184 3.93047 15.6603 3.4712 15.2011C3.01192 14.7418 2.75391 14.1189 2.75391 13.4694V2.44898C2.75391 1.79947 3.01192 1.17656 3.4712 0.717289C3.93047 0.258017 4.55338 0 5.20289 0C5.8524 0 6.4753 0.258017 6.93458 0.717289C7.39385 1.17656 7.65187 1.79947 7.65187 2.44898V11.0204H16.2233C16.8728 11.0204 17.4957 11.2784 17.955 11.7377C18.4143 12.197 18.6723 12.8199 18.6723 13.4694C18.6723 14.1189 18.4143 14.7418 17.955 15.2011C17.4957 15.6603 16.8728 15.9184 16.2233 15.9184Z"
          fill="black"
        />
        <path
          d="M46.533 26.9389C45.8835 26.9389 45.2606 26.6808 44.8013 26.2216C44.342 25.7623 44.084 25.1394 44.084 24.4899C44.0859 20.1785 42.6647 15.9871 40.041 12.5661C37.4173 9.14498 33.7378 6.68553 29.5734 5.56936C25.4091 4.45319 20.9928 4.74272 17.0098 6.39301C13.0268 8.0433 9.69987 10.9621 7.54525 14.6964C7.21985 15.2586 6.68446 15.6684 6.05686 15.8358C5.42926 16.0032 4.76087 15.9145 4.19872 15.5891C3.63657 15.2637 3.22671 14.7283 3.05931 14.1007C2.8919 13.4731 2.98066 12.8047 3.30607 12.2425C6.00057 7.57535 10.16 3.92787 15.1391 1.86593C20.1182 -0.196014 25.6385 -0.557136 30.8438 0.838582C36.0491 2.2343 40.6482 5.30883 43.9278 9.58521C47.2073 13.8616 48.9839 19.1007 48.982 24.4899C48.982 25.1394 48.724 25.7623 48.2647 26.2216C47.8054 26.6808 47.1825 26.9389 46.533 26.9389ZM43.7779 48.9797C43.1284 48.9797 42.5055 48.7217 42.0462 48.2624C41.5869 47.8031 41.3289 47.1802 41.3289 46.5307V37.9593H32.7575C32.108 37.9593 31.4851 37.7012 31.0258 37.242C30.5665 36.7827 30.3085 36.1598 30.3085 35.5103C30.3085 34.8608 30.5665 34.2379 31.0258 33.7786C31.4851 33.3193 32.108 33.0613 32.7575 33.0613H43.7779C44.4274 33.0613 45.0503 33.3193 45.5096 33.7786C45.9689 34.2379 46.2269 34.8608 46.2269 35.5103V46.5307C46.2269 47.1802 45.9689 47.8031 45.5096 48.2624C45.0503 48.7217 44.4274 48.9797 43.7779 48.9797Z"
          fill="black"
        />
        <path
          d="M24.4898 48.9795C17.9967 48.9731 11.7714 46.3908 7.18006 41.7995C2.58873 37.2082 0.00648339 30.9829 0 24.4898C0 23.8402 0.258017 23.2173 0.717289 22.7581C1.17656 22.2988 1.79947 22.0408 2.44898 22.0408C3.09849 22.0408 3.7214 22.2988 4.18067 22.7581C4.63994 23.2173 4.89796 23.8402 4.89796 24.4898C4.8961 28.8011 6.31729 32.9925 8.94099 36.4136C11.5647 39.8346 15.2442 42.2941 19.4086 43.4103C23.5729 44.5264 27.9892 44.2369 31.9722 42.5866C35.9552 40.9363 39.2821 38.0176 41.4367 34.2832C41.5979 34.0049 41.8122 33.761 42.0676 33.5655C42.323 33.37 42.6144 33.2267 42.9251 33.1438C43.2359 33.0609 43.5599 33.04 43.8787 33.0824C44.1976 33.1247 44.5049 33.2294 44.7833 33.3906C45.0616 33.5517 45.3055 33.7661 45.501 34.0214C45.6965 34.2768 45.8398 34.5682 45.9227 34.879C46.0056 35.1897 46.0264 35.5138 45.9841 35.8326C45.9418 36.1514 45.837 36.4587 45.6759 36.7371C43.5224 40.4513 40.4331 43.5361 36.7158 45.6842C32.9985 47.8322 28.7831 48.9684 24.4898 48.9795Z"
          fill="black"
        />
      </>
    ),
  },
];

const whyChooseUs = [
  {
    id: 1,
    title: "100K+ Successful\nVisa Applications",
    description:
      "Join thousands of successful applicants who trust EZmigrate for their visa journey.",
    icon: (
      <svg
        width="64"
        height="68"
        viewBox="0 0 64 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.1105 0.0109863H44.6297C45.3251 0.0109863 45.9238 0.0109862 46.4646 0.0766579C48.4027 0.318053 50.203 1.20515 51.5753 2.5949C52.9475 3.98466 53.8117 5.79608 54.0285 7.73707H57.1421C57.9611 7.72934 59.7574 7.71389 61.2408 8.70669C63.1607 9.98536 63.7402 12.1834 63.7402 14.4974C63.7402 25.028 58.1272 32.0588 50.9612 35.9643C46.963 43.2423 39.5769 48.299 31.8701 48.299C26.0021 48.299 20.4355 45.1236 16.4295 40.7313C15.0984 39.2791 13.93 37.6858 12.945 35.9798C5.78297 32.0935 0 25.0705 0 14.4974C0 12.1796 0.579456 9.98536 2.49552 8.70669C3.98279 7.71389 5.77911 7.72934 6.59807 7.73707H9.71168L9.72327 7.6289C9.96212 5.70912 10.8346 3.9239 12.2026 2.55594C13.5705 1.18799 15.3557 0.315502 17.2755 0.0766579C17.8163 0.0109862 18.4151 0.0109863 19.1105 0.0109863ZM15.4522 10.6343V10.6459L15.4135 24.155V24.1589C15.4135 26.9441 16.2093 29.7912 17.5884 32.3987L17.6425 32.4953C18.4731 34.0482 19.5122 35.5085 20.7136 36.8219C23.9663 40.3914 28.0843 42.5044 31.8739 42.5044C37.3672 42.5044 43.1579 38.5332 46.1672 32.6769C47.5342 30.044 48.2496 27.1216 48.2532 24.155L48.2455 24.1473L48.2919 9.61837C48.2919 8.68351 48.2841 8.47877 48.2687 8.34356C48.1887 7.70449 47.898 7.11029 47.4425 6.65487C46.9871 6.19944 46.3929 5.90875 45.7538 5.82873C45.3294 5.80346 44.9041 5.79573 44.479 5.80555H19.265C18.3263 5.80555 18.1254 5.80941 17.9902 5.82873C17.3511 5.90875 16.7569 6.19944 16.3015 6.65487C15.8461 7.11029 15.5554 7.70449 15.4753 8.34356C15.4501 8.768 15.4423 9.1933 15.4522 9.61837V10.6343ZM54.0748 13.5316L54.0401 24.155V24.1589M53.9512 26.241C56.4158 23.2742 57.9495 19.4035 57.9495 14.4974C57.9495 14.0415 57.9108 13.7402 57.8761 13.5509C57.579 13.533 57.2813 13.5266 56.9837 13.5316H54.0748M9.69623 26.017C9.63796 25.398 9.60959 24.7767 9.61124 24.155V24.1473L9.64601 13.5316H6.76032C6.33925 13.5316 6.0727 13.5316 5.86796 13.5509C5.81366 13.8634 5.78909 14.1803 5.79456 14.4974C5.79456 19.276 7.29342 23.0733 9.69623 26.017ZM31.8701 50.2305C32.6385 50.2305 33.3754 50.5358 33.9188 51.0791C34.4621 51.6225 34.7674 52.3594 34.7674 53.1278V61.8196H47.3222C48.0907 61.8196 48.8276 62.1249 49.3709 62.6682C49.9143 63.2116 50.2195 63.9485 50.2195 64.7169C50.2195 65.4853 49.9143 66.2223 49.3709 66.7656C48.8276 67.309 48.0907 67.6142 47.3222 67.6142H16.4179C15.6495 67.6142 14.9126 67.309 14.3692 66.7656C13.8259 66.2223 13.5206 65.4853 13.5206 64.7169C13.5206 63.9485 13.8259 63.2116 14.3692 62.6682C14.9126 62.1249 15.6495 61.8196 16.4179 61.8196H28.9728V53.1278C28.9728 52.3594 29.2781 51.6225 29.8214 51.0791C30.3647 50.5358 31.1017 50.2305 31.8701 50.2305Z"
          fill="white"
        />
        <path
          d="M30.9859 12.7779C31.0601 12.6037 31.1839 12.4552 31.3419 12.3508C31.4999 12.2463 31.685 12.1907 31.8744 12.1907C32.0638 12.1907 32.2489 12.2463 32.4069 12.3508C32.5649 12.4552 32.6887 12.6037 32.7629 12.7779L34.7137 17.4599C34.7818 17.6233 34.8935 17.7649 35.0365 17.8691C35.1796 17.9734 35.3486 18.0363 35.525 18.051L40.5817 18.4566C40.7719 18.4717 40.9534 18.5427 41.1032 18.6608C41.2531 18.779 41.3646 18.9388 41.4237 19.1202C41.4828 19.3017 41.4868 19.4965 41.4353 19.6802C41.3838 19.8639 41.279 20.0283 41.1341 20.1525L37.2827 23.4515C37.148 23.5674 37.048 23.7181 36.9934 23.8871C36.9389 24.0561 36.9321 24.2369 36.9736 24.4095L38.148 29.3388C38.1933 29.5248 38.1822 29.7201 38.1163 29.8998C38.0504 30.0796 37.9325 30.2356 37.7776 30.3482C37.6228 30.4609 37.438 30.5249 37.2467 30.5322C37.0554 30.5396 36.8662 30.4899 36.7032 30.3895L32.3766 27.7472C32.2253 27.6551 32.0515 27.6064 31.8744 27.6064C31.6973 27.6064 31.5235 27.6551 31.3722 27.7472L27.0456 30.3895C26.8826 30.4899 26.6934 30.5396 26.5021 30.5322C26.3108 30.5249 26.126 30.4609 25.9712 30.3482C25.8163 30.2356 25.6984 30.0796 25.6325 29.8998C25.5666 29.7201 25.5555 29.5248 25.6008 29.3388L26.779 24.4095C26.8206 24.2369 26.8137 24.0561 26.7592 23.8871C26.7047 23.7181 26.6046 23.5674 26.47 23.4515L22.6147 20.1525C22.4685 20.0286 22.3625 19.864 22.3102 19.6796C22.2578 19.4953 22.2615 19.2995 22.3207 19.1173C22.38 18.9351 22.4921 18.7746 22.6428 18.6562C22.7935 18.5379 22.976 18.467 23.1671 18.4527L28.22 18.051C28.397 18.037 28.5668 17.9744 28.7106 17.8701C28.8544 17.7658 28.9667 17.6239 29.0351 17.4599L30.9859 12.7779Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Experienced\nProfessionals",
    description:
      "Work with a team of seasoned experts skilled in handling every type of visa application.",
    icon: (
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M63.7543 54.4337C64.2911 54.0156 64.7191 53.4741 65.0017 52.8552C65.2844 52.2362 65.4133 51.5582 65.3776 50.8787C65.342 50.1992 65.1427 49.5384 64.7968 48.9524C64.4509 48.3665 63.9686 47.8728 63.3909 47.5132L63.374 22.9156L59.1491 25.7463V47.5048C58.5773 47.8635 58.0997 48.354 57.7564 48.9353C57.4132 49.5165 57.2142 50.1716 57.1761 50.8455C57.138 51.5195 57.262 52.1928 57.5377 52.809C57.8133 53.4252 58.2326 53.9664 58.7604 54.3872L57.1634 56.5081C55.743 58.3151 54.9562 60.5389 54.9242 62.8371V67.9999H58.3675C59.1947 67.9999 59.9982 67.7239 60.651 67.2158C61.3037 66.7077 61.7683 65.9965 61.9714 65.1946L63.3698 59.5501V67.9999H67.5948V62.8878C67.5581 60.5786 66.7656 58.3451 65.3386 56.5292L63.7543 54.4337ZM33.7995 0.396729L0 17.2965L33.7995 38.4212L67.599 17.2965L33.7995 0.396729Z"
          fill="white"
        />
        <path
          d="M33.7966 42.6457L12.6719 28.5767V35.8013C12.6719 39.646 25.0932 51.0956 33.7966 51.0956C42.4999 51.0956 54.9212 39.646 54.9212 35.8013V28.5767L33.7966 42.6457Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Personalized\nSupport",
    description:
      "Enjoy dedicated, one-on-one assistance tailored to your specific needs and goals.",
    icon: (
      <svg
        width="66"
        height="70"
        viewBox="0 0 66 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.2716 60.6114L9.27189 60.6116C14.5059 63.947 21.5216 65.5021 29.0019 65.5021C30.4448 65.5021 31.8666 65.4442 33.2674 65.3284L33.8426 65.2808L33.7136 64.7183C33.4272 63.4698 33.4337 62.1721 33.7324 60.9266L33.8954 60.2473L33.1998 60.3121C31.8427 60.4386 30.4434 60.5019 29.0019 60.5019C22.1213 60.5019 16.1362 59.0569 11.9618 56.3923L11.9617 56.3923C7.88708 53.7924 5.50028 50.0503 5.50028 45.0014C5.50028 43.0687 7.06528 41.5013 9.03656 41.5013H47.0952H47.6163L47.5948 40.9806C47.554 39.9955 47.7132 39.0124 48.0628 38.0905L48.0631 38.0897L48.4071 37.1776L48.6623 36.5012H47.9393L9.03881 36.5012C9.03852 36.5012 9.03824 36.5012 9.03795 36.5012C7.91872 36.4962 6.80953 36.7124 5.77404 37.1372C4.73829 37.5621 3.79668 38.1874 3.00327 38.9773C2.20986 39.7671 1.58029 40.7059 1.15071 41.7397C0.721125 42.7735 0.499989 43.8819 0.5 45.0014C0.5 51.9572 3.93779 57.2072 9.2716 60.6114ZM52.004 36.152L52.0038 36.1526L50.8725 39.1507C50.8723 39.1511 50.8721 39.1516 50.8719 39.1521C50.5756 39.9279 50.5125 40.7734 50.6903 41.5845C50.8683 42.3961 51.2797 43.138 51.8739 43.7188C51.874 43.7188 51.874 43.7189 51.8741 43.719L55.2206 46.993C54.9006 51.0492 52.9732 54.2083 49.3978 56.5028L44.7022 55.3912L44.7 55.3907C43.8713 55.1984 43.0063 55.2308 42.1942 55.4844C41.3822 55.7381 40.6525 56.2039 40.0806 56.8337L40.0787 56.8358L37.9017 59.2604C37.3865 59.8133 36.997 60.4711 36.7602 61.1888C36.5227 61.9081 36.4442 62.6703 36.53 63.4229C36.6158 64.1754 36.8638 64.9004 37.257 65.5479C37.6501 66.1953 38.1791 66.7497 38.8073 67.1728L40.1898 68.1118L40.1902 68.1121C41.9662 69.3156 44.2581 69.9349 46.4212 69.1524L46.4219 69.1521C52.0059 67.1233 57.1719 62.1613 60.7075 56.3662C64.2413 50.5738 66.2066 43.8494 65.2655 38.2385L65.2655 38.238C64.8951 36.0425 63.1642 34.4683 61.1805 33.6212L59.6287 32.9573L59.6281 32.9571C56.6605 31.6922 53.139 33.1561 52.004 36.152ZM29.0019 0.5C24.6256 0.5 20.4285 2.23844 17.3339 5.33288C14.2393 8.42733 12.5008 12.6243 12.5008 17.0005C12.5008 21.3767 14.2393 25.5737 17.3339 28.6681C20.4285 31.7626 24.6256 33.501 29.0019 33.501C33.3783 33.501 37.5754 31.7626 40.67 28.6681C43.7645 25.5737 45.5031 21.3767 45.5031 17.0005C45.5031 12.6243 43.7645 8.42733 40.67 5.33288C37.5754 2.23844 33.3783 0.5 29.0019 0.5ZM17.5011 17.0005C17.5011 13.9504 18.7128 11.0253 20.8696 8.86852C23.0264 6.71178 25.9517 5.50013 29.0019 5.50013C32.0522 5.50013 34.9775 6.71178 37.1343 8.86852C39.2911 11.0253 40.5028 13.9504 40.5028 17.0005C40.5028 20.0506 39.2911 22.9758 37.1343 25.1325C34.9775 27.2893 32.0522 28.5009 29.0019 28.5009C25.9517 28.5009 23.0264 27.2893 20.8696 25.1325C18.7128 22.9758 17.5011 20.0506 17.5011 17.0005Z"
          fill="white"
          stroke="white"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Seamless Online\nServices",
    description:
      "Access convenient online services with a dedicated agent to guide you at every step.",
    icon: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M69.6045 36.2341C69.6045 40.6731 68.7301 45.0686 67.0314 49.1697C65.3327 53.2707 62.8428 56.9971 59.704 60.1359C56.5652 63.2747 52.8389 65.7646 48.7378 67.4633C44.6367 69.162 40.2412 70.0363 35.8022 70.0363C31.3633 70.0363 26.9677 69.162 22.8667 67.4633C18.7656 65.7646 15.0393 63.2747 11.9004 60.1359C8.76162 56.9971 6.27176 53.2707 4.57304 49.1697C2.87432 45.0686 2 40.6731 2 36.2341C2 27.2692 5.5613 18.6715 11.9004 12.3323C18.2396 5.99318 26.8373 2.43188 35.8022 2.43188C44.7671 2.43188 53.3649 5.99318 59.704 12.3323C66.0432 18.6715 69.6045 27.2692 69.6045 36.2341Z"
          stroke="white"
          strokeWidth="3.5"
        />
        <path
          d="M49.3219 36.2341C49.3219 40.6721 48.9703 45.0696 48.291 49.1696C47.6149 53.2696 46.6178 56.9944 45.3604 60.1345C44.1064 63.2746 42.6158 65.7623 40.9765 67.4625C39.3338 69.1593 37.5762 70.0347 35.8017 70.0347C34.0271 70.0347 32.2695 69.1593 30.6302 67.4625C28.9875 65.7623 27.4969 63.2712 26.2429 60.1345C24.9855 56.9944 23.9884 53.273 23.309 49.1696C22.6157 44.8928 22.2721 40.5667 22.2814 36.2341C22.2814 31.7961 22.6296 27.3987 23.309 23.2987C23.9884 19.1987 24.9855 15.4738 26.2429 12.3338C27.4969 9.1937 28.9875 6.70598 30.6268 5.00581C32.2695 3.31241 34.0271 2.43359 35.8017 2.43359C37.5762 2.43359 39.3338 3.30903 40.9731 5.00581C42.6158 6.70598 44.1064 9.19708 45.3604 12.3338C46.6178 15.4738 47.6149 19.1953 48.291 23.2987C48.9737 27.3987 49.3219 31.7961 49.3219 36.2341Z"
          stroke="white"
          strokeWidth="3.5"
        />
        <path
          d="M2.00781 36.2344H69.6089"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
// const faqData = [
//   {
//     question: "When will I require a visa?",
//     answer:
//       "A visa is required when you plan to travel, work, study, or migrate to another country, depending on the country's immigration policies.",
//   },
//   {
//     question: "Why do I need a visa to travel?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "What is a visa policy, and how does it work?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "Why are there visa restrictions in certain countries?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "What are the different types of visas?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "What documents are required for a visa interview?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "How much does it cost to get a visa?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "How long does it take to get a visa?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
//   {
//     question: "How do I apply for a visa?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "Which visa categories does EZmigrate process?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     question: "What is a visa?",
//     answer:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// Add this FAQ component at the top level of your file
// const FAQItem = ({
//   item,
//   isOpen,
//   index,
//   onToggle,
// }: {
//   item: { question: string; answer: string };
//   isOpen: boolean;
//   index: number;
//   onToggle: (index: number) => void;
// }) => {
//   return (
//     <div className="border-b border-black py-6">
//       <button
//         onClick={() => onToggle(index)}
//         className="flex justify-between items-center w-full text-left"
//       >
//         <h1 className="text-lg text-black font-bold">{item.question}</h1>
//         <span className="ml-6">
//           <svg
//             className="w-6 h-6 transition-transform duration-200"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M20 12H4"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 4v16m8-8H4"
//               />
//             )}
//           </svg>
//         </span>
//       </button>
//       <div
//         className={`grid transition-all duration-200 ease-in-out ${
//           isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
//         }`}
//       >
//         <div className="overflow-hidden">
//           <div className="mt-3">
//             <p className="font-light">{item.answer}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Visa = () => {
  // Add this state for FAQ
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col min-h-screen xl:min-h-fit">
      <PageHeader content={pageHeaders["visa"]} />

      <div className="relative z-10 bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-white font-light mb-12">
            {" "}
            Our Visa Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationCards.map((destination, index) => (
              <div
                key={index}
                className="bg-white shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 relative w-full">
                  <div className="flex items-start space-x-3 mb-2">
                    <ReactCountryFlag
                      countryCode={destination.countryCode}
                      svg
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "cover",
                      }}
                      title={destination.country}
                      className="rounded-full border-primary border-[1px]"
                    />
                    <div className="w-full">
                      <h3 className="font-light">{destination.country}</h3>
                      <div className="relative border-t-2 w-full border-dashed border-spacing-1 border-gray-800">
                        <div className="-mt-4 flex items-end justify-end">
                          <div className="z-10 -mb-4 w-8 h-8 bg-black rounded-full flex items-center rotate-45 justify-center">
                            <Plane color="white" fill="white" size={20} />
                          </div>
                        </div>
                      </div>
                      <p className="text-info py-8 space-y-3 flex flex-col">
                        {destination.visaType.map((visaType, index) => (
                          <Link
                            key={index}
                            href={destination.link.replace(
                              "[visa-type]",
                              visaType.toLowerCase().replace(/\s+/g, "-")
                            )}
                            className="font-medium text-sm"
                          >
                            {visaType}
                          </Link>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full bottom-8">
                  <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-black"></div>
                  <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-black"></div>
                  <div className="border-t-2 border-dashed border-gray-800 w-[90%] m-auto"></div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-10 md:mt-16 text-white">
            <Link
              href="/study-abroad"
              className="inline-flex font-light w-full md:w-auto justify-center items-center border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
            >
              View more destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div> */}
        </div>
      </div>

      <div className="text-black bg-white py-10 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Visa Process</h2>
          <p className="mb-16 text-lg">
            EZMigrate offers expert guidance and streamlined solutions to help
            you confidently navigate complex visa procedures and submit your
            application with ease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-24 md:h-auto"
              >
                <div key={step.id} className="text-center relative h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 54 54"
                        stroke="currentColor"
                      >
                        {step.icon}
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                  <p className="text-base md:text-sm">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden rotate-90 md:rotate-0 lg:block md:absolute md:top-8 -right-32 w-40">
                      {/* <hr className="border-t-2 border-dashed" /> */}
                      <div className="relative border-t-2 w-full border-dashed border-spacing-1 border-gray-800">
                        <div className="-mt-3 flex items-end justify-center">
                          <div className="z-10 -mb-4 w-6 h-6 bg-black rounded-full flex items-center rotate-45 justify-center">
                            <Plane color="white" fill="white" size={10} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="md:hidden rotate-90 md:rotate-0 md:absolute md:top-8 -right-24 w-40">
                    {/* <hr className="border-t-2 border-dashed" /> */}
                    <div className="relative border-t-2 w-full border-dashed border-spacing-1 border-gray-800">
                      <div className="-mt-3 flex items-end justify-center">
                        <div className="z-10 -mb-4 w-6 h-6 bg-black rounded-full flex items-center rotate-45 justify-center">
                          <Plane color="white" fill="white" size={10} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light mb-4">
            Why Choose EZmigrate as Your Visa Partner?
          </h2>
          <p className="mb-16 text-lg font-light">
            We make your global aspirations a reality!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.id} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16">{item.icon}</div>
                </div>
                <h3 className="text-xl font-medium mb-3">
                  {item.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add this new section before the black background section */}
      <div className="bg-stone-600">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Visa Solutions by EZmigrate
          </h1>
          <p className="mb-12">
            Simplify your global journey with EZmigrate—your trusted partner for
            all visa-related services.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-4">What is a Visa?</h2>
              <p className="">
                A visa is an official travel document that allows foreign
                nationals to enter, stay, or travel within a country for
                specific purposes like work, study, business, or tourism. Each
                visa type has its unique criteria and procedures, making expert
                guidance essential.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6">Types of Visa</h2>
              <div className="space-y-6">
                <div>
                  <h1 className="text-xl text-info mb-2">
                    Permanent Residency (PR) Visa
                  </h1>
                  <p className="">
                    A PR visa allows you to live and work in a country
                    permanently, with the opportunity to apply for citizenship
                    in many cases.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl text-info mb-2">Visit/Tourist Visa</h1>
                  <p className="">
                    For short-term stays, a tourist visa enables you to travel
                    temporarily for leisure, business, or transit purposes.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl text-info mb-2">Student Visa</h1>
                  <p className="">
                    Students enrolled in recognized institutions abroad need a
                    study visa. This non-immigrant visa lets you pursue higher
                    education in foreign countries.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl text-info mb-2">Work Visa</h1>
                  <p className="">
                    Work visas are issued for temporary or permanent employment
                    abroad. Employers often sponsor these visas, ensuring you
                    meet the eligibility requirements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6">
                Why Choose EZmigrate?
              </h2>
              <p className=" mb-4">
                At EZmigrate, we simplify the complex visa processes to ensure a
                hassle-free experience for you.
              </p>
              <ul className="list-disc pl-5 space-y-2 ">
                <li>
                  Expert Guidance: From selecting the right visa to
                  documentation and submission.
                </li>
                <li>
                  Tailored Strategies: Personalized plans to enhance your visa
                  success rate.
                </li>
                <li>
                  Comprehensive Support: Financial advice, document preparation,
                  and application review.
                </li>
                <li>
                  Seamless Process: Streamlined services for confident visa
                  filing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6">
                How EZmigrate Can Help
              </h2>
              <ol className="list-decimal pl-5 space-y-2 ">
                <li>Identify the best visa strategy based on your needs.</li>
                <li>Advise on financial and document requirements.</li>
                <li>
                  Assist in filling out forms and completing your application.
                </li>
                <li>
                  Provide a thorough review of all documents before submission.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6">
                General Steps to Apply for a Visa
              </h2>
              <ol className="list-decimal pl-5 space-y-2 ">
                <li>
                  <span className="font-medium">Choose Your Visa:</span> Select
                  the appropriate visa type based on your purpose.
                </li>
                <li>
                  <span className="font-medium">Prepare Your Application:</span>{" "}
                  Gather and organize all required documents.
                </li>
                <li>
                  <span className="font-medium">
                    Attend Embassy/Consulate Appointment:
                  </span>{" "}
                  Submit biometrics or attend an interview.
                </li>
                <li>
                  <span className="font-medium">Await Decision:</span> Receive
                  updates on your application status.
                </li>
              </ol>
            </section>
          </div>
        </div>
      </div>
      {/* advisor section */}

      {/* Advisor Section */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col h-72 justify-between">
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                Immigration Advisor
              </h3>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6">
                  Shamsher Singh
                </h2>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light">
                    License Immigration Advisor No. :{" "}
                    <span className="text-blue-500">201700472</span>
                  </h3>
                  <h3 className="text-2xl font-light">
                    Migration Agent Register No. :{" "}
                    <span className="text-blue-500">2318106</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/advisor.webp"
                alt="Immigration Advisor"
                width={300}
                height={300}
                className="w-64 md:w-72 object-cover -mb-5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {/* <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-black font-light mb-12">FAQ</h2>
          <div className="mx-auto">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={activeIndex === index}
                onToggle={(idx) =>
                  setActiveIndex(activeIndex === idx ? null : idx)
                }
              />
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Visa;
