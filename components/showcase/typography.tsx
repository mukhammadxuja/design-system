import React from "react";
import InlineCode from "../ui/inline-code";

export const Typography = () => {
  return (
    <div className="py-6">
      <h3 className="text-h2">Typography</h3>
      <div className="space-y-8 pt-8">
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="uppercase text-s3">H1</p>
            <InlineCode line="className='text-h1'" />
          </span>
          <h1 className="text-h1">
            Do not feel lonely, the entire universe is inside you.
          </h1>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="uppercase text-s3">H2</p>
            <InlineCode line="className='text-h2'" />
          </span>
          <h2 className="text-h2">
            Do not feel lonely, the entire universe is inside you.
          </h2>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="uppercase text-s3">H3</p>
            <InlineCode line="className='text-h3'" />
          </span>
          <h3 className="text-h3">
            Do not feel lonely, the entire universe is inside you.
          </h3>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="uppercase text-s3">H4</p>
            <InlineCode line="className='text-h4'" />
          </span>
          <h4 className="text-h4">
            Do not feel lonely, the entire universe is inside you.
          </h4>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="uppercase text-s3">H5</p>
            <InlineCode line="className='text-h5'" />
          </span>
          <h5 className="text-h5">
            Do not feel lonely, the entire universe is inside you.
          </h5>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="uppercase text-s3">H6</p>
            <InlineCode line="className='text-h6'" />
          </span>
          <h6 className="text-h6">
            Do not feel lonely, the entire universe is inside you.
          </h6>
        </div>
      </div>
      <div className="space-y-8 pt-8">
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="text-s3">Text size 7</p>
            <InlineCode line="className='text-s7'" />
          </span>
          <h1 className="text-s7">
            Do not feel lonely, the entire universe is inside you.
          </h1>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="text-s3">Text size 6</p>
            <InlineCode line="className='text-s6'" />
          </span>
          <h2 className="text-s6">
            Do not feel lonely, the entire universe is inside you.
          </h2>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="text-s3">Text size 5</p>
            <InlineCode line="className='text-s5'" />
          </span>
          <h3 className="text-s5">
            Do not feel lonely, the entire universe is inside you.
          </h3>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="text-s3">Text size 4</p>
            <InlineCode line="className='text-s4'" />
          </span>
          <h4 className="text-s4">
            Do not feel lonely, the entire universe is inside you.
          </h4>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="text-s3">Text size 3</p>
            <InlineCode line="className='text-s3'" />
          </span>
          <h5 className="text-s3">
            Do not feel lonely, the entire universe is inside you.
          </h5>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="text-s3">Text size 2</p>
            <InlineCode line="className='text-s2'" />
          </span>
          <h6 className="text-s2">
            Do not feel lonely, the entire universe is inside you.
          </h6>
        </div>
        <div className="space-y-2">
          <span className="flex space-x-2">
            <p className="text-s3">Text size 1</p>
            <InlineCode line="className='text-s1'" />
          </span>
          <h6 className="text-s1">
            Do not feel lonely, the entire universe is inside you.
          </h6>
        </div>
      </div>

      <div className="pt-8">
        <span className="flex space-x-2">
          <p className="text-s3">Text gradient</p>
          <InlineCode line="className='text-gradient'" />
        </span>
        <p className="text-gradient pt-2">
          Do not feel lonely, the entire universe is inside you.
        </p>
      </div>
    </div>
  );
};
