import { createContext, FC, ReactNode, useContext, useState } from 'react';
import Alert from './Alert';

interface AlertProviderProps {
    children: ReactNode;
}

interface AlertItem {
    id: number;
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
}

interface AlertContextType {
    showAlert: (message: string, type?: 'success' | 'error' | 'warning' | 'info') => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
    const [alerts, setAlerts] = useState<AlertItem[]>([]);

    const showAlert = (
        message: string,
        type: 'success' | 'error' | 'warning' | 'info' = 'success',
    ) => {
        const id = Date.now();
        setAlerts((prev) => [...prev, { id, message, type }]);

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            setAlerts((prev) => prev.filter((alert) => alert.id !== id));
        }, 3900);
    };

    const dismissAlert = (id: number) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <div className="fixed bottom-4 right-4 space-y-2 z-50">
                {alerts.map((alert) => (
                    <Alert
                        key={alert.id}
                        message={alert.message}
                        type={alert.type}
                        onClose={() => dismissAlert(alert.id)}
                    />
                ))}
            </div>
        </AlertContext.Provider>
    );
};

export const useAlert = (): AlertContextType => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};
