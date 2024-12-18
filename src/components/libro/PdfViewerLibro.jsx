import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import './PdfViewerLibro.css'

export const PdfViewerLibro = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar: () => null, sidebarTabs: () => [], renderViewer: (props) => (
            <div style={{ height: '100%' }}>
                <Viewer {...props} />
            </div>
        ),
    });

    return (
        <div className="container">
            <br />
            <div className="pdf-container w-full max-w-3xl mx-auto mb-10">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '850px',
                            overflow: 'hidden',
                            padding: '0',
                            margin: '0',
                        }}
                    >
                        <Viewer
                            fileUrl={"https://www.urp.edu.pe/pdf/id/4392/n/formato-modelo-de-informe-final-de-investigacion-2.pdf"}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </div>
                </Worker>
            </div>
        </div>
    );
};

export default PdfViewerLibro;
