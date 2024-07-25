import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({ title, value, footer }) {
  return (
    <Card className="border border-blue-gray-100 shadow-sm overflow-hidden h-48"> {/* Adjust height as needed */}
      <div className="flex flex-col h-full">
        {/* Top half of the card */}
        <div className="bg-[#FD6F52] p-3 flex-1">
          <Typography variant="small" className="font-bold text-white text-sm">
            {title}
          </Typography>
          <Typography variant="h5" color="white">
            {value}
          </Typography>
        </div>
        {/* Bottom half of the card */}
        <CardBody className="bg-white p-3 flex-1">
          {footer && (
            <CardFooter className="p-3">
              {footer}
            </CardFooter>
          )}
        </CardBody>
      </div>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  footer: null,
};

StatisticsCard.propTypes = {
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
