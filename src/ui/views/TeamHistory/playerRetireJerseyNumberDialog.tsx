import { useEffect, useRef, useState } from "react";
import { confirmable, createConfirmation } from "react-confirm";
import { helpers } from "../../util";
import Modal from "../../components/Modal";

const Confirm = confirmable<
	{
		p: any;
	},
	string | undefined
>(({ show, proceed, p }) => {
	const numbers = Object.keys(p.retirableJerseyNumbers);
	const [number, setNumber] = useState(() => {
		let maxSeasons = -Infinity;
		let selectedNumber;
		for (const number of numbers) {
			const seasons = p.retirableJerseyNumbers[number];
			if (seasons.length >= maxSeasons) {
				maxSeasons = seasons.length;
				selectedNumber = number;
			}
		}
		console.log(maxSeasons, selectedNumber);
		return selectedNumber;
	});

	const inputRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		// Ugly hack that became necessary when upgrading reactstrap from v6 to v8
		setTimeout(() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}, 0);
	}, []);

	const cancel = () => proceed(undefined);
	const ok = () => proceed(number);

	return (
		<Modal show={show} onHide={cancel}>
			<Modal.Header closeButton>Retire {p.name}'s jersey number</Modal.Header>
			<Modal.Body>
				<form
					onSubmit={event => {
						event.preventDefault();
						ok();
					}}
				>
					<div className="d-flex">
						<div className="flex-grow-1 me-2">
							<select
								ref={inputRef}
								className="form-select"
								onChange={event => {
									setNumber(event.target.value);
								}}
								value={number}
							>
								{numbers.map(number => (
									<option key={number} value={number}>
										#{number} (
										{helpers
											.yearRanges(p.retirableJerseyNumbers[number])
											.join(", ")}
										)
									</option>
								))}
							</select>
						</div>
						<button className="btn btn-primary" onClick={ok}>
							Retire Jersey Number
						</button>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
});

const confirmFunction = createConfirmation(Confirm);

const playerRetireJerseyNumberDialog = (p: any) => {
	return confirmFunction({
		p,
	});
};

export default playerRetireJerseyNumberDialog;
