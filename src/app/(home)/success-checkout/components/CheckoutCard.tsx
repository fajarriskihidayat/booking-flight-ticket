import { User } from "lucia";
import React, { FC } from "react";
import FlightCard from "../../checkout/components/FlightCard";

interface CheckoutCardProps {
  user: User | null;
}

const CheckoutCard: FC<CheckoutCardProps> = ({ user }) => {
  return <FlightCard user={user} />;
};

export default CheckoutCard;
