import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/common/ui/Footer";
import Navbar from "@/components/common/ui/Navbar";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<MaxWidthWrapper>
				<main>
					<h2 className="text-blue-700">Home Page</h2>
				</main>
			</MaxWidthWrapper>
			<Footer />
		</>
	);
};

export default HomePage;
