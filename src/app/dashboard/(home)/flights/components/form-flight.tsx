"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitButtonForm from "../../components/submit-button-form";
import { Airplane, Flight } from "@prisma/client";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { useFormState } from "react-dom";
import { saveFlight, updateFlight } from "../lib/actions";
import { dateFormat } from "@/lib/utils";

interface FormFlightProps {
  airplanes: Airplane[];
  type?: "ADD" | "EDIT";
  defaultValues?: Flight | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormFlight = ({ airplanes, type, defaultValues }: FormFlightProps) => {
  const updateFlightWithId = (_state: ActionResult, formData: FormData) =>
    updateFlight(null, defaultValues?.id, formData);

  const [state, formAction] = useFormState(
    type === "ADD" ? saveFlight : updateFlightWithId,
    initialFormState
  );

  return (
    <form action={formAction} className="space-y-6">
      {state?.errorTitle !== null && (
        <div className=" my-7 bg-red-500 p-4 rounded-lg text-white">
          <div className="font-bold mb-3">{state.errorTitle}</div>

          <ul className="list-inside list-disc">
            {state.errorDesc?.map((value, i) => (
              <li key={i}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="planeId">Pilih Pesawat</Label>
          <Select name="planeId" defaultValue={defaultValues?.planeId}>
            <SelectTrigger id="planeId">
              <SelectValue placeholder="Pilih pesawat" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((value) => (
                <SelectItem key={value.id} value={value.id}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga Tiket</Label>
          <Input
            placeholder="Harga tiket..."
            name="price"
            id="price"
            type="number"
            min={0}
            defaultValue={defaultValues?.price}
            required
          />
          <span className="text-xs text-gray-900">
            Harga untuk kelas business bertambah Rp. 500.000 & kelas first
            bertambah Rp. 750.000
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="departureCity">Kota Keberangkatan</Label>
          <Input
            placeholder="Kota keberangkatan..."
            name="departureCity"
            id="departureCity"
            defaultValue={defaultValues?.departureCity}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureDate">Tanggal Keberangkatan</Label>
          <Input
            type="datetime-local"
            className="block"
            placeholder="Tanggal keberangkatan..."
            name="departureDate"
            id="departureDate"
            defaultValue={dateFormat(
              defaultValues?.departureDate,
              "YYYY-MM-DDTHH:mm"
            )}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureCityCode">Kode Kota Keberangkatan</Label>
          <Input
            placeholder="Kode kota..."
            name="departureCityCode"
            id="departureCityCode"
            defaultValue={defaultValues?.departureCityCode}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCity">Kota Tujuan</Label>
          <Input
            placeholder="Kota tujuan..."
            name="destinationCity"
            id="destinationCity"
            defaultValue={defaultValues?.destinationCity}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="arrivalDate">Tanggal Tiba</Label>
          <Input
            type="datetime-local"
            className="block"
            placeholder="Tanggal tiba..."
            name="arrivalDate"
            id="arrivalDate"
            defaultValue={dateFormat(
              defaultValues?.arrivalDate,
              "YYYY-MM-DDTHH:mm"
            )}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCityCode">Kode Kota Tujuan</Label>
          <Input
            placeholder="Kode kota..."
            name="destinationCityCode"
            id="destinationCityCode"
            defaultValue={defaultValues?.destinationCityCode}
            required
          />
        </div>
      </div>

      <SubmitButtonForm />
    </form>
  );
};

export default FormFlight;
