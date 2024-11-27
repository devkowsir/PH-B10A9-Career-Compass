import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BookingTimes } from "../config";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { Services } from "../config";

const Confirmation = ({ customizations, toggleOption, calculateTotalPrice }) => {
  const { slug } = useParams();
  const [_, setBookings] = useLocalStorage({ key: "bookings", initial: [] });
  const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  /** @type {React.FormEventHandler<SubmitEvent>} */
  const handleSubmit = (e) => {
    const {
      title,
      heroSection: { image },
      counselorSection: { name: counselor },
    } = Services.find((service) => slug == service.slug);

    setBookings((curr) => [
      ...curr,
      {
        title,
        image,
        counselor,
        date: e.target.date.value,
        time: e.target.time.value.padStart(2, "0"),
        customizations: customizations.filter(({ enabled }) => enabled).map(({ name }) => name),
        totalPrice: calculateTotalPrice(),
      },
    ]);

    toast("Service has been booked successfully.", { type: "success" });
  };

  return (
    <dialog id="service-confirm-modal" className="modal">
      <form onSubmit={handleSubmit} method="dialog" className="modal-box space-x-4">
        <h3 className="text-4xl font-bold text-center">Confirm Booking</h3>
        <p className="my-4 text-5xl font-extrabold text-primary text-center">${calculateTotalPrice()}</p>
        <div className="max-w-screen-md mb-6">
          {customizations.map((option, index) => (
            <label key={index} className="label flex">
              <input
                type="checkbox"
                className="mr-2 checkbox checkbox-primary checkbox-sm rounded-md"
                checked={option.enabled}
                onChange={() => toggleOption(index)}
                name={option.name.replace(" ", "-")}
              />
              <h4 className="tooltip mr-auto font-semibold" data-tip={option.description}>
                {option.name}
              </h4>
              <p className="text-primary font-bold">+${option.priceAdjustment}</p>
            </label>
          ))}
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Choose Your Time</h3>
          <input name="date" type="date" min={minDate} defaultValue={minDate} className="input input-bordered" />
          <select name="time" className="ml-4 select select-bordered">
            {BookingTimes.map(({ time }, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-action">
          <button
            className="btn"
            type="button"
            onClick={() => document.getElementById("service-confirm-modal").close()}
          >
            Close
          </button>
          <button className="btn btn-primary">Confirm</button>
        </div>
      </form>
    </dialog>
  );
};

export default Confirmation;
