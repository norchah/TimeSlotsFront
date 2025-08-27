import React from 'react';
import {Button} from "@heroui/react";

export default function ButtonPrimary(props) {
  return (
    <Button color='primary' {...props}>
      {props.children}
    </Button>
  );
}
