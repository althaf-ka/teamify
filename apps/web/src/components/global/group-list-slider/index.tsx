"use client";

import Link from "next/link";
import { UseFormRegister } from "react-hook-form";
import { SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TEAMIFY_CONSTANTS } from "@/constants";
import { Slider } from "../slider";
import { GroupListItem } from "./list-item";

type GroupListSliderProps = {
  overlay?: boolean;
  label?: string;
  register?: UseFormRegister<any>;
  selected?: string;
  route?: boolean;
} & SwiperProps;

export const GroupListSlider = ({
  overlay,
  label,
  register,
  selected,
  route,
  ...rest
}: GroupListSliderProps) => {
  return (
    <>
      {label ? (
        <h2 className="text-themeTextWhite px-7 text-base font-bold">
          {label}
        </h2>
      ) : null}
      <Slider
        freeMode
        loop
        overlay={overlay}
        slidesPerView="auto"
        spaceBetween={10}
        {...rest}
      >
        {/* eslint-disable no-nested-ternary -- conditional rendering */}
        {TEAMIFY_CONSTANTS.groupList.map((item, i) => (
          <SwiperSlide className="content-width-slide" key={item.id}>
            {!register ? (
              route ? (
                <Link href={`/explore/${item.path}`}>
                  <GroupListItem {...item} selected={selected} />
                </Link>
              ) : (
                <GroupListItem {...item} />
              )
            ) : (
              i > 0 && (
                <Label htmlFor={`item-${item.id}`}>
                  <span>
                    <Input
                      className="hidden"
                      id={`item-${item.id}`}
                      type="radio"
                      value={item.path}
                      {...register("category")}
                    />
                    <GroupListItem {...item} selected={selected} />
                  </span>
                </Label>
              )
            )}
          </SwiperSlide>
        ))}
      </Slider>
    </>
  );
};
