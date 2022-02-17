import React from "react";
import { STRINGS } from "../../constants/string";
import { useNavigate } from "react-router-dom";
import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Row } from "../../components/Row";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
import { List } from "../../components/List";
import { Line } from "../../components/Line";
import { Button } from "../../components/Button";

const Desktop1Page = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/desktop2");

  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[1025px] 3xl:h-[1230px] h-[1024px] lg:h-[797px] w-[100%] xl:h-[911px]">
        <Row className="absolute font-poppins items-center left-[0] w-[100%]">
          <Column className="bg-black_900 justify-center w-[70%]">
            <Image
              src="img_logo31.png"
              className="2xl:h-[46px] 3xl:h-[55px] 3xl:mt-[340px] 3xl:mx-[171px] h-[45px] lg:h-[35px] lg:mt-[220px] lg:mx-[111px] mt-[284px] mx-[143px] w-[22%] xl:h-[41px] xl:mt-[252px] xl:mx-[127px]"
              alt="logo31"
            />
            <Text className="3xl:min-h-[60px] 3xl:mt-[48px] 3xl:mx-[171px] 3xl:text-fs48 align-top font-bold lg:min-h-[38px] lg:mt-[31px] lg:mx-[111px] lg:text-fs31 min-h-[50px] mt-[40px] mx-[143px] text-fs40 text-left text-white_A700 xl:min-h-[44px] xl:mt-[35px] xl:mx-[127px] xl:text-fs35">
              {STRINGS["msg_why_businesses"] || ""}
            </Text>
            <Row className="3xl:mt-[48px] 3xl:mx-[171px] font-poppins items-center justify-start lg:mt-[31px] lg:mx-[111px] mt-[40px] mx-[143px] w-[40%] xl:mt-[35px] xl:mx-[127px]">
              <Image
                src="img_automated.svg"
                className="2xl:h-[61px] 3xl:h-[73px] 3xl:my-[6px] h-[60px] lg:h-[47px] lg:my-[3px] my-[5px] object-contain w-[18%] xl:h-[54px] xl:my-[4px]"
                alt="Automated"
              />
              <Text className="2xl:ml-[31px] 2xl:mr-[52px] 3xl:min-h-[64px] 3xl:ml-[38px] 3xl:mr-[62px] 3xl:my-[9px] 3xl:text-fs21 align-top font-medium leading-lh lg:min-h-[42px] lg:ml-[24px] lg:mr-[40px] lg:my-[6px] lg:text-fs14 min-h-[54px] ml-[31.850006px] mr-[52.039978px] my-[8px] text-fs18 text-left text-white_A700 w-[61%] xl:min-h-[48px] xl:ml-[28px] xl:mr-[46px] xl:my-[7px] xl:text-fs16">
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-normal lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  Keebo provides
                </span>
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  {" "}
                   
                </span>
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-bold lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  Automated Optimizations
                </span>
              </Text>
            </Row>
            <Row className="3xl:mt-[36px] 3xl:mx-[171px] font-poppins items-center justify-start lg:mt-[23px] lg:mx-[111px] mt-[30px] mx-[143px] w-[40%] xl:mt-[26px] xl:mx-[127px]">
              <Image
                src="img_cost.svg"
                className="2xl:h-[63px] 3xl:h-[75px] 3xl:ml-[14px] h-[62px] lg:h-[49px] lg:ml-[9px] lg:my-[3px] ml-[12px] my-[4px] object-contain w-[12%] xl:h-[56px] xl:ml-[10px] xl:my-[3px]"
                alt="Cost"
              />
              <Text className="2xl:ml-[44px] 2xl:mr-[76px] 3xl:mb-[8px] 3xl:min-h-[64px] 3xl:ml-[53px] 3xl:mr-[91px] 3xl:mt-[10px] 3xl:text-fs21 align-top font-medium leading-lh lg:mb-[5px] lg:min-h-[42px] lg:ml-[34px] lg:mr-[59px] lg:mt-[7px] lg:text-fs14 mb-[7px] min-h-[54px] ml-[44.910004px] mr-[76.03998px] mt-[9px] text-fs18 text-left text-white_A700 w-[55%] xl:mb-[6px] xl:min-h-[48px] xl:ml-[39px] xl:mr-[67px] xl:mt-[8px] xl:text-fs16">
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-normal lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  Keebo helps
                </span>
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                   
                </span>
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-bold lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  Reduce Compute Costs
                </span>
              </Text>
            </Row>
            <Row className="3xl:mb-[354px] 3xl:mt-[36px] 3xl:mx-[171px] font-poppins items-center justify-start lg:mb-[229px] lg:mt-[23px] lg:mx-[111px] mb-[295px] mt-[30px] mx-[143px] w-[40%] xl:mb-[262px] xl:mt-[26px] xl:mx-[127px]">
              <Image
                src="img_fast.svg"
                className="2xl:h-[55px] 3xl:h-[65px] 3xl:my-[9px] h-[54px] lg:h-[42px] lg:my-[6px] my-[8px] object-contain w-[19%] xl:h-[49px] xl:my-[7px]"
                alt="Fast"
              />
              <Text className="2xl:ml-[29px] 2xl:mr-[60px] 3xl:min-h-[64px] 3xl:ml-[35px] 3xl:mr-[72px] 3xl:my-[9px] 3xl:text-fs21 align-top font-medium leading-lh lg:min-h-[42px] lg:ml-[22px] lg:mr-[46px] lg:my-[6px] lg:text-fs14 min-h-[54px] ml-[29.320007px] mr-[60.039978px] my-[8px] text-fs18 text-left text-white_A700 w-[59%] xl:min-h-[48px] xl:ml-[26px] xl:mr-[53px] xl:my-[7px] xl:text-fs16">
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-normal lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  Keebo enables
                </span>
                <span className="text-white_A700 text-fs18 align-top font-poppins text-left font-bold lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                   Faster Analytical Queries
                </span>
              </Text>
            </Row>
          </Column>
          <div className="2xl:h-[1025px] 3xl:h-[1230px] bg-bluegray_100 h-[1024px] lg:h-[797px] w-[31%] xl:h-[911px]"></div>
        </Row>
        <Column className="-translate-y-1/2 3xl:right-[176px] absolute bg-white_A700 font-roboto items-center justify-start lg:right-[114px] right-[147px] rounded-radius20 shadow-bs top-[50%] w-[36%] xl:right-[130px]">
          <Row className="3xl:mt-[55px] items-center justify-end lg:mt-[35px] mt-[46px] w-[100%] xl:mt-[40px]">
            <Text className="3xl:min-h-[67px] 3xl:ml-[50px] 3xl:text-fs57 align-top font-normal lg:min-h-[43px] lg:ml-[32px] lg:text-fs37 min-h-[56px] ml-[42px] text-black_900_dd text-fs48 text-left xl:min-h-[49px] xl:ml-[37px] xl:text-fs42">
              {STRINGS["lbl_sign_in"] || ""}
            </Text>
            <Text className="3xl:mb-[14px] 3xl:min-h-[28px] 3xl:ml-[57px] 3xl:mt-[24px] 3xl:text-fs19 align-top font-normal lg:mb-[9px] lg:min-h-[18px] lg:ml-[37px] lg:mt-[15px] lg:text-fs12 mb-[12px] min-h-[24px] ml-[48px] mt-[20px] text-fs16 text-gray_700 text-left tracking-ls1 xl:mb-[10px] xl:min-h-[21px] xl:ml-[42px] xl:mt-[17px] xl:text-fs14">
              {STRINGS["msg_don_t_have_an_a"] || ""}
            </Text>
            <Text className="3xl:mb-[14px] 3xl:min-h-[28px] 3xl:ml-[10px] 3xl:mr-[49px] 3xl:mt-[24px] 3xl:text-fs19 align-middle font-normal lg:mb-[9px] lg:min-h-[18px] lg:ml-[7px] lg:mr-[31px] lg:mt-[15px] lg:text-fs12 mb-[12px] min-h-[24px] ml-[9px] mr-[41px] mt-[20px] text-blue_900 text-fs16 text-left tracking-ls1 xl:mb-[10px] xl:min-h-[21px] xl:ml-[8px] xl:mr-[36px] xl:mt-[17px] xl:text-fs14">
              {STRINGS["lbl_sign_up"] || ""}
            </Text>
          </Row>
          <List
            className="3xl:mt-[63px] flex-wrap gap-[0] lg:mt-[41px] min-h-[auto] mt-[53px] mx-[auto] w-[84%] xl:mt-[47px]"
            orientation="vertical"
          >
            <Column className="2xl:my-[17px] 3xl:my-[21px] font-roboto justify-start lg:my-[13px] my-[17.86px] w-[100%] xl:my-[15px]">
              <Stack className="2xl:h-[46px] 3xl:h-[55px] h-[45.5px] lg:h-[36px] w-[100%] xl:h-[41px]">
                <Row className="-translate-x-1/2 2xl:bottom-[5px] 3xl:bottom-[6px] absolute bottom-[5.5px] font-roboto left-[50%] lg:bottom-[4px] w-[94%] xl:bottom-[4px]">
                  <Text className="3xl:min-h-[28px] 3xl:mt-[7px] 3xl:text-fs19 align-top font-normal lg:min-h-[18px] lg:mt-[4px] lg:text-fs12 min-h-[24px] mt-[6px] text-black_900_dd text-fs16 text-left tracking-ls1 xl:min-h-[21px] xl:mt-[5px] xl:text-fs14">
                    {STRINGS["lbl_user"] || ""}
                  </Text>
                  <Line className="2xl:h-[18px] 2xl:mb-[3px] 2xl:mt-[9px] 3xl:h-[21px] 3xl:mb-[4px] 3xl:mt-[11px] bg-black_900_dd h-[17px] lg:h-[14px] lg:mb-[2px] lg:ml-[3px] lg:mt-[7px] mb-[3.5px] ml-[4px] mt-[9.5px] w-[1px] xl:h-[16px] xl:mb-[3px] xl:ml-[3px] xl:mt-[8px]" />
                  <Image
                    src="img_trailingicon.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[7px] 3xl:ml-[404px] h-[24px] lg:h-[19px] lg:mb-[4px] lg:ml-[262px] mb-[6px] ml-[337px] object-contain w-[auto] xl:h-[22px] xl:mb-[5px] xl:ml-[299px]"
                    alt="TrailingIcon"
                  />
                </Row>
                <Stack className="2xl:h-[46px] 3xl:h-[55px] absolute h-[45.5px] left-[0] lg:h-[36px] w-[100%] xl:h-[41px]">
                  <Image
                    src="img_label.svg"
                    className="2xl:h-[46px] 3xl:h-[55px] absolute h-[45.5px] left-[0] lg:h-[36px] object-cover w-[100%] xl:h-[41px]"
                    alt="Label"
                  />
                  <Row className="-translate-x-1/2 absolute font-roboto left-[50%] top-[0] w-[92%]">
                    <Text className="3xl:min-h-[9px] 3xl:text-fs14 align-top font-normal lg:min-h-[6px] lg:text-fs9 min-h-[8px] text-black_900_99 text-fs12 text-left tracking-ls1 xl:min-h-[7px] xl:text-fs10">
                      {STRINGS["lbl_user"] || ""}
                    </Text>
                    <div className="2xl:h-[2px] 2xl:mb-[7px] 3xl:h-[2px] 3xl:mb-[9px] border border-black_901 border-solid h-[1px] lg:mb-[5px] lg:ml-[2px] mb-[7.5px] ml-[3px] mt-[1px] w-[93%] xl:mb-[6px] xl:ml-[2px]"></div>
                  </Row>
                </Stack>
              </Stack>
              <Text className="2xl:min-h-[3px] 2xl:mt-[13px] 3xl:min-h-[3px] 3xl:mt-[16px] 3xl:mx-[19px] 3xl:text-fs14 align-top font-normal lg:min-h-[2px] lg:mt-[10px] lg:mx-[12px] lg:text-fs9 min-h-[3.28px] mt-[13.5px] mx-[16px] text-black_900_99 text-fs12 text-left tracking-ls1 xl:min-h-[2px] xl:mt-[12px] xl:mx-[14px] xl:text-fs10">
                {STRINGS["lbl_enter_your_user"] || ""}
              </Text>
            </Column>
            <Column className="2xl:my-[17px] 3xl:my-[21px] font-roboto justify-start lg:my-[13px] my-[17.86px] rounded-radius4 w-[100%] xl:my-[15px]">
              <Stack className="2xl:h-[44px] 3xl:h-[52px] h-[43px] lg:h-[34px] w-[100%] xl:h-[39px]">
                <Row className="-translate-x-1/2 absolute bottom-[3px] font-roboto left-[50%] lg:bottom-[2px] w-[94%] xl:bottom-[2px]">
                  <Text className="3xl:min-h-[28px] 3xl:mt-[7px] 3xl:text-fs19 align-top font-normal lg:min-h-[18px] lg:mt-[4px] lg:text-fs12 min-h-[24px] mt-[6px] text-black_900_dd text-fs16 text-left tracking-ls1 xl:min-h-[21px] xl:mt-[5px] xl:text-fs14">
                    {STRINGS["lbl"] || ""}
                  </Text>
                  <Line className="2xl:h-[18px] 2xl:mb-[3px] 2xl:mt-[9px] 3xl:h-[21px] 3xl:mb-[4px] 3xl:mt-[11px] bg-black_901 h-[17px] lg:h-[14px] lg:mb-[2px] lg:mt-[7px] mb-[3.5px] mt-[9.5px] w-[1px] xl:h-[16px] xl:mb-[3px] xl:mt-[8px]" />
                  <Image
                    src="img_trailingicon.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[7px] 3xl:ml-[361px] h-[24px] lg:h-[19px] lg:mb-[4px] lg:ml-[234px] mb-[6px] ml-[301px] object-contain w-[auto] xl:h-[22px] xl:mb-[5px] xl:ml-[267px]"
                    alt="TrailingIcon"
                  />
                </Row>
                <Stack className="2xl:h-[44px] 3xl:h-[52px] absolute h-[43px] left-[0] lg:h-[34px] w-[100%] xl:h-[39px]">
                  <Image
                    src="img_label_1.svg"
                    className="2xl:h-[44px] 3xl:h-[52px] absolute h-[43px] left-[0] lg:h-[34px] object-cover w-[100%] xl:h-[39px]"
                    alt="Label"
                  />
                  <Row className="-translate-x-1/2 absolute font-roboto left-[50%] top-[0] w-[92%]">
                    <Text className="3xl:min-h-[8px] 3xl:text-fs14 align-top font-normal lg:min-h-[5px] lg:text-fs9 min-h-[7px] text-black_901 text-fs12 text-left tracking-ls1 xl:min-h-[6px] xl:text-fs10">
                      {STRINGS["lbl_password"] || ""}
                    </Text>
                    <div className="2xl:h-[2px] 3xl:h-[2px] 3xl:mb-[8px] border border-black_901 border-solid h-[1px] lg:mb-[5px] lg:ml-[2px] mb-[7px] ml-[3px] w-[85%] xl:mb-[6px] xl:ml-[2px]"></div>
                  </Row>
                </Stack>
              </Stack>
              <Text className="2xl:min-h-[2px] 3xl:min-h-[2px] 3xl:mt-[19px] 3xl:mx-[19px] 3xl:text-fs14 align-top font-normal lg:min-h-[1px] lg:mt-[12px] lg:mx-[12px] lg:text-fs9 min-h-[2.44px] mt-[16px] mx-[16px] text-black_901 text-fs12 text-left tracking-ls1 xl:min-h-[2px] xl:mt-[14px] xl:mx-[14px] xl:text-fs10">
                {STRINGS["msg_enter_your_pass"] || ""}
              </Text>
            </Column>
          </List>
          <Row className="2xl:mt-[49px] 3xl:mt-[59px] items-center justify-start lg:mt-[38px] mt-[49.559998px] mx-[auto] w-[78%] xl:mt-[44px]">
            <div className="2xl:h-[27px] 3xl:h-[32px] bg-gray_100 border-black_901 border-bw01 border-solid h-[26px] lg:h-[21px] rounded-radius5 shadow-bs1 w-[7%] xl:h-[24px]"></div>
            <Text className="3xl:min-h-[28px] 3xl:ml-[10px] 3xl:text-fs19 align-top font-normal lg:min-h-[18px] lg:ml-[7px] lg:text-fs12 min-h-[24px] ml-[9px] my-[1px] text-fs16 text-gray_700 text-left tracking-ls1 xl:min-h-[21px] xl:ml-[8px] xl:text-fs14">
              {STRINGS["lbl_remember_me"] || ""}
            </Text>
            <Text className="3xl:min-h-[28px] 3xl:ml-[117px] 3xl:text-fs19 align-middle font-normal lg:min-h-[18px] lg:ml-[76px] lg:mt-[1px] lg:text-fs12 min-h-[24px] ml-[98px] mt-[2px] text-blue_900 text-fs16 text-left tracking-ls1 xl:min-h-[21px] xl:ml-[87px] xl:mt-[1px] xl:text-fs14">
              {STRINGS["msg_forgot_your_pas"] || ""}
            </Text>
          </Row>
          <Button
            className="common-pointer 3xl:mb-[57px] 3xl:mt-[62px] 3xl:pl-[16px] 3xl:pr-[18px] 3xl:py-[12px] 3xl:text-fs16 align-middle bg-deep_purple_A700 border-bw font-medium lg:mb-[37px] lg:mt-[40px] lg:pl-[10px] lg:pr-[11px] lg:py-[7px] lg:text-fs10 mb-[48px] mt-[52px] mx-[auto] pl-[14px] pr-[15px] py-[10px] rounded-radius4 text-center text-fs14 text-white_A700 tracking-ls1 uppercase w-[17%] xl:mb-[42px] xl:mt-[46px] xl:pl-[12px] xl:pr-[13px] xl:py-[8px] xl:text-fs12"
            onClick={handleNavigate1}
          >
            {STRINGS["lbl_sign_in"] || ""}
          </Button>
        </Column>
      </Stack>
    </Column>
  );
};

export default Desktop1Page;
