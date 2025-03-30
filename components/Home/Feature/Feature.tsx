import React from 'react'
import { Card, CardHeader, CardBody, Image, Calendar } from "@heroui/react";
import { parseDate } from "@internationalized/date";

const Feature = () => {
  return (
    <div className="text-black flex  rounded-2xl px-28 pt-32 pb-14  justify-center items-end bg-amber-700 my-16 mx-100 flex-col ">
      <div>
        <Calendar aria-label="Date (No Selection)" />
        <Calendar
          aria-label="Date (Uncontrolled)"
          defaultValue={parseDate("2020-02-03")}
        />
      </div>
      <div>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Study Lifo</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-lg text-gray-900"> scientfic Study music integrated </h4>
          </CardHeader>
            <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover hover:scale-105 hover:border-red-900 hover:transition-transform rounded-xl"
              src="https://heroui.com/images/hero-card-complete.jpeg"
              width={270}
            />
            </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Feature