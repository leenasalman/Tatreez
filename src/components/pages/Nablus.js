import React from "react";
import CitySectionTemplate from "../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../sections/CityInfoSectionTemplate";
import Feather from "../../Assets/Images/feather.svg";
import Flower from "../../Assets/Images/flower_2.svg";
import IMG from "../../Assets/Images/samaria.png";
import Shapes from "../Shapes";


function Nablus() {
  var city = {
    name: "Nablus",
    nameAr: "نابلس",
    description:
      " is a Palestinian city that traces its modern name back to the Roman period, when it was named Flavia Neapolis by Roman emperor Vespasian in 72 CE. During the Byzantine period, conflict between the city's Samaritan and newer Christian inhabitants peaked in the Samaritan revolts that were eventually suppressed by the Byzantines by 573, which greatly dwindled the Samaritan population of the city. Nablus is one of the Palestinian cities that sustained elite classes, fostering the development of a culture of 'high cuisine', such as that of Damascus or Baghdad. The city is home to a number of food products well known throughout the Levant, the Arab world and the former provinces of the Ottoman Empire. Kanafeh (or Kunafa) is the best known Nabulsi sweet.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "Feather",
      shapeImage: Feather,
    },
    {
      shapeText: "Flower",
      shapeImage: Flower,
    },
  ];
  return (
    <>
      <CitySectionTemplate cityName={city.name} imgSrc={city.imgSrc} />
      <CityInfoSectionTemplate
        cityName={city.name}
        cityNameAr={city.nameAr}
        Info={city.description}
      />
      {shapes.map((shape, index) => {
        return (
          <Shapes
            key={index}
            animation={"fade-up"}
            shapeImage={shape.shapeImage}
            text={shape.shapeText}
            textAnimation={"fade-left"}
          />
        );
      })}
    </>
  );
}

export default Nablus;