import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Row } from "../../components/Row";
import { Text } from "../../components/Text";

const Desktop2Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[998px] 3xl:h-[1198px] 3xl:mb-[32px] h-[997px] lg:h-[776px] lg:mb-[21px] mb-[27px] w-[100%] xl:h-[887px] xl:mb-[24px]">
        <Row className="absolute items-center left-[0] w-[100%]">
          <div className="2xl:h-[998px] 3xl:h-[1198px] bg-black_900 h-[997px] lg:h-[776px] w-[70%] xl:h-[887px]"></div>
          <div className="2xl:h-[998px] 3xl:h-[1198px] bg-bluegray_100 h-[997px] lg:h-[776px] w-[31%] xl:h-[887px]"></div>
        </Row>
        <Column className="-translate-x-1/2 -translate-y-1/2  2xl:bottom-[265px] 2xl:right-[219px] 3xl:bottom-[318px] 3xl:right-[263px] absolute bg-yellow_A400 bottom-[265.31px] font-roboto items-center justify-center left-[50%] lg:bottom-[206px] lg:right-[170px] right-[219.28px] rounded-radius219 top-[50%] w-[72%] xl:bottom-[236px] xl:right-[195px]">
          <Text className="2xl:mb-[190px] 3xl:mb-[228px] 3xl:min-h-[67px] 3xl:mt-[231px] 3xl:text-fs128 align-middle font-extrabold lg:mb-[148px] lg:min-h-[43px] lg:mt-[150px] lg:text-fs83 mb-[190.69px] min-h-[56px] mt-[193px] mx-[auto] text-black_900_dd text-center text-fs107 xl:mb-[169px] xl:min-h-[49px] xl:mt-[171px] xl:text-fs95">
            {STRINGS["lbl_construcci_n"] || ""}
          </Text>
        </Column>
      </Stack>
    </Column>
  );
};

export default Desktop2Page;
