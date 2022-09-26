import React, { useRef, useState } from "react";
import Async from "react-select/async";

const MySelect = ({
  label,
  options,
  asyncSelect,
  loadOptions,
  components,
  placeholder,
  fixedHeight,
  onSelect,
  defaultOptions = [],
  ...props
}) => {
  const ref = useRef();
  const asyncRef = useRef();

  const [fieldValue, setFieldValue] = useState();

  // Gets called when an option is chosen or created.
  const onChange = value => {
    console.info("inputvalue++ -> ",value)
    setFieldValue(value);
    onSelect(value);
  };

  // Toggle menu by presence of input.
  // Reset value if input is emptied.
  const onInputChange = (value, context) => {
    if (!value && context.action === "input-change") {
      onChange(null);
    }
  };

  // Restore input value.
  const onFocus = () => {
    if (fieldValue) {
      asyncRef.current.state.inputValue = fieldValue.label;
      asyncRef.current.select.state.inputValue = fieldValue.label;
      asyncRef.current.handleInputChange(fieldValue.label);
    }
  };

  // Close menu when pressing enter. Submit does not work on mobile.
  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onMenuClose();
    }
  };

  // Blur select element to trigger onFocus on next click.
  const onMenuClose = () => {
    asyncRef.current.select.blur();
  };

  return (
    <>
      <div ref={ref} />
      <Async
        ref={asyncRef}
        {...props}
        value={fieldValue}
        components={components ? components : null}
        loadOptions={loadOptions ? loadOptions : () => null}
        placeholder={placeholder ? placeholder : "Select..."}
        searchPromptText="Start Typing"
        autoload
        isSearchable
        searchable
        cacheOptions
        // Hook into events to make the editing work.
        onChange={onChange}
        onInputChange={onInputChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onMenuClose={onMenuClose}
        defaultOptions={defaultOptions}
      />
    </>
  );
};

export default MySelect;