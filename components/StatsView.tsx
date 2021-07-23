import { Tip} from '@prisma/client';
import Image from 'next/image';

interface TipCardProps {
  tip: Tip;
}

export default function TipCard(props: TipCardProps) {
  return (
    <div className="border rounded-lg p-4 flex">
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {props.tip.offenseType} {props.tip.neighborhood}
        </p>
        <p className="text-gray-500">{props.tip.description}</p>
      </div>
    </div>
  );
}
