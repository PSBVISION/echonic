"use client";
// Import helper factories from `@tanstack/react-form` to create
// typed form hooks and their React contexts.
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

// Create shared form and field contexts plus consumer hooks:
// - `fieldContext`, `formContext`: React Context objects for fields and forms.
// - `useFieldContext`, `useFormContext`: hooks to access those contexts in components.
export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

// Create the app-specific form hook factory using the contexts above.
// - `fieldComponents` and `formComponents` are registries for custom renderers
//   (left empty here, meaning no registered custom components).
// - Returns `useAppForm`: a hook to create/manage a form instance (defaults,
//   validation, submit handlers, etc.).
// - Returns `useTypedAppFormContext`: a typed accessor for the form context.
export const { useAppForm, useTypedAppFormContext } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {},
});
