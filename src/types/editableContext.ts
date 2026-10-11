export interface LoginCredentials {
  username: string;
  password: string;
}

export interface EditableContextLike {
  isEditMode: boolean;
  isAdmin: boolean;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  setActiveModal: (modal: string | null) => void;
  saveChanges: () => Promise<boolean>;
  discardChanges: () => void;
  logoutAdmin: () => void;
}

export interface LoginContextLike {
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  loginAdmin: (credentials: LoginCredentials) => Promise<boolean>;
  isAdmin: boolean;
}
