type StarType = {
	star: number;
	reviews?: number;
	style: string;
	parent: string;
};

const Star = ({ star, reviews, style, parent }: StarType) => {
	const ratingStar = Array.from({ length: 5 }, (elem, index) => {
		let number = index + 0.5;

		return (
			<span key={index}>
				{star >= index + 1 ? (
					<svg
						fill="currentColor"
						viewBox="0 0 16 16"
						height="1em"
						width="1em"
					>
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				) : star >= number ? (
					<svg
						fill="currentColor"
						viewBox="0 0 16 16"
						height="1em"
						width="1em"
					>
						<path d="M5.354 5.119L7.538.792A.516.516 0 018 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0116 6.32a.548.548 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 01-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 01-.172-.403.58.58 0 01.085-.302.513.513 0 01.37-.245l4.898-.696zM8 12.027a.5.5 0 01.232.056l3.686 1.894-.694-3.957a.565.565 0 01.162-.505l2.907-2.77-4.052-.576a.525.525 0 01-.393-.288L8.001 2.223 8 2.226v9.8z" />
					</svg>
				) : (
					<svg
						fill="currentColor"
						viewBox="0 0 16 16"
						height="1em"
						width="1em"
					>
						<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288L8 2.223l1.847 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.565.565 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" />
					</svg>
				)}
			</span>
		);
	});
	return (
		<div className={parent}>
			<div className={style}>{ratingStar}</div>
			{reviews && <p>({reviews} customer reviews)</p>}
		</div>
	);
};

export default Star;
