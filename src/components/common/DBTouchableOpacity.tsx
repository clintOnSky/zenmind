import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from "react-native";
import React, { PropsWithChildren, useEffect, useState } from "react";

interface Props extends TouchableOpacityProps {
  debounce?: boolean;
  debounceTimeout?: number;
}

const DBTouchableOpacity = ({
  debounce = true,
  disabled,
  debounceTimeout,
  children,
  ...props
}: PropsWithChildren & Props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const enableButton = () => {
      if (isDisabled && debounce) {
        const timeout = debounceTimeout || 500;
        const timeoutId = setTimeout(() => setIsDisabled(false), timeout);

        return () => clearTimeout(timeoutId);
      }
    };
    enableButton();
  }, [isDisabled, debounce]);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPressOut={() => setIsDisabled(true)}
      disabled={isDisabled || disabled}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default DBTouchableOpacity;

const styles = StyleSheet.create({});
