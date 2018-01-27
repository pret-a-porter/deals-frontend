import * as React from 'react';

interface IlogoProps {
  className?: string;
}

export class Logo extends React.PureComponent<IlogoProps, {}> {
  public render() {
    return (
      <span className={this.props.className}>
        <svg width="230px" height="22px" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            {/* tslint:disable-next-line:max-line-length */}
            <path d="M5.256,4.824 L5.256,6.864 C5.48000112,6.04799592 5.74399848,5.44800192 6.048,5.064 C6.75200352,4.1839956 7.73599368,3.744 9,3.744 C9.8800044,3.744 10.619997,4.02799716 11.22,4.596 C11.820003,5.16400284 12.12,5.86399584 12.12,6.696 C12.12,7.35200328 11.9280019,7.89199788 11.544,8.316 C11.1599981,8.74000212 10.672003,8.952 10.08,8.952 C9.63199776,8.952 9.25200156,8.80800144 8.94,8.52 C8.62799844,8.23199856 8.472,7.88000208 8.472,7.464 C8.472,7.23999888 8.57599896,6.928002 8.784,6.528 L8.64,6.528 C7.56799464,6.528 6.84800184,7.09599432 6.48,8.232 C6.19199856,9.14400456 6.048,10.1919941 6.048,11.376 L6.048,12.288 C6.048,12.8640029 6.09599952,13.2319992 6.192,13.392 C6.25600032,13.4880005 6.3679992,13.536 6.528,13.536 C6.67200072,13.536 6.87199872,13.5040003 7.128,13.44 C7.38400128,13.3759997 7.57599936,13.344 7.704,13.344 C8.05600176,13.344 8.35599876,13.4679988 8.604,13.716 C8.85200124,13.9640012 8.976,14.2639982 8.976,14.616 C8.976,15.0800023 8.82000156,15.4679984 8.508,15.78 C8.19599844,16.0920016 7.81600224,16.248 7.368,16.248 C7.1279988,16.248 6.68000328,16.2080004 6.024,16.128 C5.623998,16.0799998 5.12000304,16.056 4.512,16.056 C3.90399696,16.056 3.36800232,16.0799998 2.904,16.128 C2.13599616,16.2080004 1.66400088,16.248 1.488,16.248 C0.49599504,16.248 0,15.7120054 0,14.64 C0,13.7439955 0.38399616,13.296 1.152,13.296 C1.28000064,13.296 1.4239992,13.3239997 1.584,13.38 C1.7440008,13.4360003 1.8639996,13.464 1.944,13.464 C2.21600136,13.464 2.352,13.0160045 2.352,12.12 L2.352,8.232 C2.352,7.31999544 2.21600136,6.864 1.944,6.864 C1.87999968,6.864 1.75600092,6.89199972 1.572,6.948 C1.38799908,7.00400028 1.24800048,7.032 1.152,7.032 C0.38399616,7.032 0,6.5920044 0,5.712 C0,5.2319976 0.12799872,4.84000152 0.384,4.536 C0.64000128,4.23199848 0.967998,4.08 1.368,4.08 C1.5280008,4.08 1.75199856,4.11199968 2.04,4.176 C2.32800144,4.24000032 2.59999872,4.272 2.856,4.272 C3.04800096,4.272 3.32799816,4.24000032 3.696,4.176 C4.06400184,4.11199968 4.33599912,4.08 4.512,4.08 C5.00800248,4.08 5.256,4.32799752 5.256,4.824 Z M24.24,9.12 C24.24,9.79200336 24.1560008,10.2399989 23.988,10.464 C23.8199992,10.6880011 23.4880025,10.8 22.992,10.8 L17.136,10.8 C16.8479986,10.8 16.6680004,10.8279997 16.596,10.884 C16.5239996,10.9400003 16.488,11.0799989 16.488,11.304 C16.488,11.9760034 16.7039978,12.5359978 17.136,12.984 C17.5680022,13.4320022 18.1119967,13.656 18.768,13.656 C19.4400034,13.656 20.1279965,13.2880037 20.832,12.552 C21.3120024,12.0399974 21.8399971,11.784 22.416,11.784 C22.8960024,11.784 23.2839985,11.9199986 23.58,12.192 C23.8760015,12.4640014 24.024,12.8079979 24.024,13.224 C24.024,14.1520046 23.5160051,14.9399968 22.5,15.588 C21.4839949,16.2360032 20.2480073,16.56 18.792,16.56 C16.8879905,16.56 15.3680057,15.9840058 14.232,14.832 C13.0959943,13.6799942 12.528,12.1440096 12.528,10.224 C12.528,8.28799032 13.0919944,6.72400596 14.22,5.532 C15.3480056,4.33999404 16.8239909,3.744 18.648,3.744 C20.3440085,3.744 21.6999949,4.23199512 22.716,5.208 C23.7320051,6.18400488 24.24,7.48799184 24.24,9.12 Z M16.608,7.92 C16.608,8.01600048 16.6319998,8.09599968 16.68,8.16 C16.7280002,8.22400032 16.8959986,8.256 17.184,8.256 L19.872,8.256 C20.1120012,8.256 20.2599997,8.22800028 20.316,8.172 C20.3720003,8.11599972 20.4,8.01600072 20.4,7.872 C20.4,7.45599792 20.2160018,7.09200156 19.848,6.78 C19.4799982,6.46799844 19.0480025,6.312 18.552,6.312 C17.9119968,6.312 17.392002,6.55999752 16.992,7.056 C16.7359987,7.3760016 16.608,7.66399872 16.608,7.92 Z M36.432,16.56 C35.1199934,16.56 34.2400022,16.0320053 33.792,14.976 C32.6719944,16.0320053 31.3440077,16.56 29.808,16.56 C28.5439937,16.56 27.5360038,16.2280033 26.784,15.564 C26.0319962,14.8999967 25.656,14.0160055 25.656,12.912 C25.656,11.2319916 26.3839927,10.1440025 27.84,9.648 C28.4640031,9.43999896 29.1839959,9.26400072 30,9.12 C31.1360057,8.92799904 31.907998,8.70800124 32.316,8.46 C32.724002,8.21199876 32.928,7.83200256 32.928,7.32 C32.928,6.95199816 32.7720016,6.64400124 32.46,6.396 C32.1479984,6.14799876 31.7600023,6.024 31.296,6.024 C30.7679974,6.024 30.504,6.19199832 30.504,6.528 C30.504,6.64000056 30.5119999,6.75199944 30.528,6.864 L30.528,6.96 C30.528,7.40800224 30.3400019,7.78399848 29.964,8.088 C29.5879981,8.39200152 29.1200028,8.544 28.56,8.544 C27.9199968,8.544 27.3920021,8.35200192 26.976,7.968 C26.5599979,7.58399808 26.352,7.10400288 26.352,6.528 C26.352,5.66399568 26.8079954,4.98400248 27.72,4.488 C28.6320046,3.99199752 29.887992,3.744 31.488,3.744 C33.2160086,3.744 34.5039958,4.00799736 35.352,4.536 C36.2640046,5.11200288 36.72,6.18399216 36.72,7.752 L36.72,12.72 C36.72,13.2320026 36.8479987,13.488 37.104,13.488 C37.2320006,13.488 37.3519994,13.4800001 37.464,13.464 C37.5120002,13.4479999 37.5679997,13.44 37.632,13.44 C38.0000018,13.44 38.3119987,13.5679987 38.568,13.824 C38.8240013,14.0800013 38.952,14.3919982 38.952,14.76 C38.952,15.2880026 38.7160024,15.7199983 38.244,16.056 C37.7719976,16.3920017 37.1680037,16.56 36.432,16.56 Z M32.952,11.424 L32.952,10.896 C32.8399994,10.9600003 32.1360065,11.1599983 30.84,11.496 C29.9599956,11.7200011 29.52,12.0639977 29.52,12.528 C29.52,13.2640037 29.9519957,13.632 30.816,13.632 C32.2400071,13.632 32.952,12.8960074 32.952,11.424 Z M44.52,0 C44.9680022,0 45.192,0.29599704 45.192,0.888 L45.192,12.24 C45.192,13.040004 45.3519984,13.44 45.672,13.44 C45.8000006,13.44 45.9119995,13.4240002 46.008,13.392 C46.1040005,13.3599998 46.2319992,13.344 46.392,13.344 C47.0960035,13.344 47.448,13.7599958 47.448,14.592 C47.448,15.6960055 46.9680048,16.248 46.008,16.248 C45.9919999,16.248 45.384006,16.2000005 44.184,16.104 C43.8159982,16.0719998 43.4240021,16.056 43.008,16.056 C42.6559982,16.056 42.280002,16.0799998 41.88,16.128 C41.2079966,16.2080004 40.7840009,16.248 40.608,16.248 C40.1759978,16.248 39.8240014,16.1000015 39.552,15.804 C39.2799986,15.5079985 39.144,15.1200024 39.144,14.64 C39.144,13.7439955 39.5359961,13.296 40.32,13.296 C40.4160005,13.296 40.5479992,13.3239997 40.716,13.38 C40.8840008,13.4360003 41.0159995,13.464 41.112,13.464 C41.3840014,13.464 41.52,13.0160045 41.52,12.12 L41.52,4.128 C41.52,3.23199552 41.3840014,2.784 41.112,2.784 C40.9999994,2.784 40.8560009,2.81599968 40.68,2.88 C40.5839995,2.91200016 40.4560008,2.928 40.296,2.928 C39.5279962,2.928 39.144,2.4880044 39.144,1.608 C39.144,1.11199752 39.2799986,0.72000144 39.552,0.432 C39.8240014,0.14399856 40.1919977,0 40.656,0 C40.7840006,0 41.0559979,0.02399976 41.472,0.072 C42.0160027,0.13600032 42.4239986,0.168 42.696,0.168 C43.0640018,0.168 43.3839986,0.13600032 43.656,0.072 C44.0240018,0.02399976 44.311999,0 44.52,0 Z M59.448,3.912 C60.6640061,3.912 61.7839949,4.38399528 62.808,5.328 L62.808,3.6 C62.808,3.02399712 62.608002,2.736 62.208,2.736 C62.1119995,2.736 61.9200014,2.75199984 61.632,2.784 C61.423999,2.84800032 61.216001,2.88 61.008,2.88 C60.7039985,2.88 60.448001,2.75200128 60.24,2.496 C60.031999,2.23999872 59.928,1.92000192 59.928,1.536 C59.928,0.51199488 60.4719946,0 61.56,0 C61.9120018,0 62.1679992,0.00799992 62.328,0.024 C62.9680032,0.08800032 63.3999989,0.12 63.624,0.12 C63.832001,0.12 64.135998,0.10400016 64.536,0.072 C64.936002,0.03999984 65.231999,0.024 65.424,0.024 C65.824002,0.024 66.0999992,0.11599908 66.252,0.3 C66.4040008,0.48400092 66.48,0.82399752 66.48,1.32 L66.48,12.24 C66.48,13.0560041 66.6319985,13.464 66.936,13.464 C67.0320005,13.464 67.1519993,13.4400002 67.296,13.392 C67.3920005,13.3599998 67.5199992,13.344 67.68,13.344 C68.3680034,13.344 68.712,13.7519959 68.712,14.568 C68.712,15.0640025 68.5920012,15.4679984 68.352,15.78 C68.1119988,16.0920016 67.792002,16.248 67.392,16.248 L67.248,16.248 L66.408,16.104 C66.215999,16.0719998 65.9440018,16.056 65.592,16.056 C65.1759979,16.056 64.8320014,16.0719998 64.56,16.104 C64.159998,16.1520002 63.9440002,16.176 63.912,16.176 C63.4159975,16.176 63.168,15.8880029 63.168,15.312 L63.168,14.424 C62.3359958,15.8480071 61.0880083,16.56 59.424,16.56 C57.9519926,16.56 56.7400048,15.956006 55.788,14.748 C54.8359952,13.539994 54.36,12.0160092 54.36,10.176 C54.36,8.30399064 54.8279953,6.79200576 55.764,5.64 C56.7000047,4.48799424 57.9279924,3.912 59.448,3.912 Z M60.288,6.936 C59.695997,6.936 59.2120019,7.2159972 58.836,7.776 C58.4599981,8.3360028 58.2480002,9.0959952 58.2,10.056 L58.2,10.368 C58.2,11.3440049 58.3879981,12.1119972 58.764,12.672 C59.1400019,13.2320028 59.6479968,13.512 60.288,13.512 C60.9920035,13.512 61.5639978,13.208003 62.004,12.6 C62.4440022,11.991997 62.664,11.184005 62.664,10.176 C62.664,9.19999512 62.4480022,8.41600296 62.016,7.824 C61.5839978,7.23199704 61.0080036,6.936 60.288,6.936 Z M81.36,9.12 C81.36,9.79200336 81.2760008,10.2399989 81.108,10.464 C80.9399992,10.6880011 80.6080025,10.8 80.112,10.8 L74.256,10.8 C73.9679986,10.8 73.7880004,10.8279997 73.716,10.884 C73.6439996,10.9400003 73.608,11.0799989 73.608,11.304 C73.608,11.9760034 73.8239978,12.5359978 74.256,12.984 C74.6880022,13.4320022 75.2319967,13.656 75.888,13.656 C76.5600034,13.656 77.2479965,13.2880037 77.952,12.552 C78.4320024,12.0399974 78.9599971,11.784 79.536,11.784 C80.0160024,11.784 80.4039985,11.9199986 80.7,12.192 C80.9960015,12.4640014 81.144,12.8079979 81.144,13.224 C81.144,14.1520046 80.6360051,14.9399968 79.62,15.588 C78.6039949,16.2360032 77.3680073,16.56 75.912,16.56 C74.0079905,16.56 72.4880057,15.9840058 71.352,14.832 C70.2159943,13.6799942 69.648,12.1440096 69.648,10.224 C69.648,8.28799032 70.2119944,6.72400596 71.34,5.532 C72.4680056,4.33999404 73.9439909,3.744 75.768,3.744 C77.4640085,3.744 78.8199949,4.23199512 79.836,5.208 C80.8520051,6.18400488 81.36,7.48799184 81.36,9.12 Z M73.728,7.92 C73.728,8.01600048 73.7519998,8.09599968 73.8,8.16 C73.8480002,8.22400032 74.0159986,8.256 74.304,8.256 L76.992,8.256 C77.2320012,8.256 77.3799997,8.22800028 77.436,8.172 C77.4920003,8.11599972 77.52,8.01600072 77.52,7.872 C77.52,7.45599792 77.3360018,7.09200156 76.968,6.78 C76.5999982,6.46799844 76.1680025,6.312 75.672,6.312 C75.0319968,6.312 74.512002,6.55999752 74.112,7.056 C73.8559987,7.3760016 73.728,7.66399872 73.728,7.92 Z M93.552,16.56 C92.2399934,16.56 91.3600022,16.0320053 90.912,14.976 C89.7919944,16.0320053 88.4640077,16.56 86.928,16.56 C85.6639937,16.56 84.6560038,16.2280033 83.904,15.564 C83.1519962,14.8999967 82.776,14.0160055 82.776,12.912 C82.776,11.2319916 83.5039927,10.1440025 84.96,9.648 C85.5840031,9.43999896 86.3039959,9.26400072 87.12,9.12 C88.2560057,8.92799904 89.027998,8.70800124 89.436,8.46 C89.844002,8.21199876 90.048,7.83200256 90.048,7.32 C90.048,6.95199816 89.8920016,6.64400124 89.58,6.396 C89.2679984,6.14799876 88.8800023,6.024 88.416,6.024 C87.8879974,6.024 87.624,6.19199832 87.624,6.528 C87.624,6.64000056 87.6319999,6.75199944 87.648,6.864 L87.648,6.96 C87.648,7.40800224 87.4600019,7.78399848 87.084,8.088 C86.7079981,8.39200152 86.2400028,8.544 85.68,8.544 C85.0399968,8.544 84.5120021,8.35200192 84.096,7.968 C83.6799979,7.58399808 83.472,7.10400288 83.472,6.528 C83.472,5.66399568 83.9279954,4.98400248 84.84,4.488 C85.7520046,3.99199752 87.007992,3.744 88.608,3.744 C90.3360086,3.744 91.6239958,4.00799736 92.472,4.536 C93.3840046,5.11200288 93.84,6.18399216 93.84,7.752 L93.84,12.72 C93.84,13.2320026 93.9679987,13.488 94.224,13.488 C94.3520006,13.488 94.4719994,13.4800001 94.584,13.464 C94.6320002,13.4479999 94.6879997,13.44 94.752,13.44 C95.1200018,13.44 95.4319987,13.5679987 95.688,13.824 C95.9440013,14.0800013 96.072,14.3919982 96.072,14.76 C96.072,15.2880026 95.8360024,15.7199983 95.364,16.056 C94.8919976,16.3920017 94.2880037,16.56 93.552,16.56 Z M90.072,11.424 L90.072,10.896 C89.9599994,10.9600003 89.2560065,11.1599983 87.96,11.496 C87.0799956,11.7200011 86.64,12.0639977 86.64,12.528 C86.64,13.2640037 87.0719957,13.632 87.936,13.632 C89.3600071,13.632 90.072,12.8960074 90.072,11.424 Z M101.64,0 C102.088002,0 102.312,0.29599704 102.312,0.888 L102.312,12.24 C102.312,13.040004 102.471998,13.44 102.792,13.44 C102.920001,13.44 103.032,13.4240002 103.128,13.392 C103.224,13.3599998 103.351999,13.344 103.512,13.344 C104.216004,13.344 104.568,13.7599958 104.568,14.592 C104.568,15.6960055 104.088005,16.248 103.128,16.248 C103.112,16.248 102.504006,16.2000005 101.304,16.104 C100.935998,16.0719998 100.544002,16.056 100.128,16.056 C99.7759982,16.056 99.400002,16.0799998 99,16.128 C98.3279966,16.2080004 97.9040009,16.248 97.728,16.248 C97.2959978,16.248 96.9440014,16.1000015 96.672,15.804 C96.3999986,15.5079985 96.264,15.1200024 96.264,14.64 C96.264,13.7439955 96.6559961,13.296 97.44,13.296 C97.5360005,13.296 97.6679992,13.3239997 97.836,13.38 C98.0040008,13.4360003 98.1359995,13.464 98.232,13.464 C98.5040014,13.464 98.64,13.0160045 98.64,12.12 L98.64,4.128 C98.64,3.23199552 98.5040014,2.784 98.232,2.784 C98.1199994,2.784 97.9760009,2.81599968 97.8,2.88 C97.7039995,2.91200016 97.5760008,2.928 97.416,2.928 C96.6479962,2.928 96.264,2.4880044 96.264,1.608 C96.264,1.11199752 96.3999986,0.72000144 96.672,0.432 C96.9440014,0.14399856 97.3119977,0 97.776,0 C97.9040006,0 98.1759979,0.02399976 98.592,0.072 C99.1360027,0.13600032 99.5439986,0.168 99.816,0.168 C100.184002,0.168 100.503999,0.13600032 100.776,0.072 C101.144002,0.02399976 101.431999,0 101.64,0 Z M117.768,3.744 L118.68,3.792 C118.696,2.97599592 118.967997,2.34000228 119.496,1.884 C120.024003,1.42799772 120.751995,1.2 121.68,1.2 C122.432004,1.2 123.059997,1.39199808 123.564,1.776 C124.068003,2.16000192 124.32,2.64799704 124.32,3.24 C124.32,3.640002 124.188001,3.97599864 123.924,4.248 C123.659999,4.52000136 123.328002,4.656 122.928,4.656 C122.479998,4.656 122.152001,4.48800168 121.944,4.152 L121.704,3.768 C121.64,3.65599944 121.536001,3.6 121.392,3.6 C121.055998,3.6 120.888,3.83199768 120.888,4.296 C120.888,4.40800056 120.896,4.48799976 120.912,4.536 C122.448008,5.08000272 123.216,6.16799184 123.216,7.8 C123.216,9.03200616 122.740005,10.0239962 121.788,10.776 C120.835995,11.5280038 119.584008,11.904 118.032,11.904 C117.199996,11.904 116.344004,11.7200018 115.464,11.352 L115.344,11.304 C115.103999,11.496001 114.984,11.7039989 114.984,11.928 C114.984,12.4720027 115.367996,12.8079994 116.136,12.936 C116.392001,12.9840002 116.975995,13.008 117.888,13.008 L118.152,13.008 L119.688,12.984 C121.224008,12.9679999 122.407996,13.263997 123.24,13.872 C124.072004,14.480003 124.488,15.3439944 124.488,16.464 C124.488,17.8880071 123.864006,19.0119959 122.616,19.836 C121.367994,20.6600041 119.672011,21.072 117.528,21.072 C115.60799,21.072 114.068006,20.7160036 112.908,20.004 C111.747994,19.2919964 111.168,18.3440059 111.168,17.16 C111.168,15.8799936 111.975992,14.9920025 113.592,14.496 C112.311994,14.2399987 111.672,13.512006 111.672,12.312 C111.672,11.6879969 111.811999,11.1960018 112.092,10.836 C112.372001,10.4759982 112.871996,10.1360016 113.592,9.816 C113.015997,9.1759968 112.728,8.47200384 112.728,7.704 C112.728,6.5839944 113.211995,5.6440038 114.18,4.884 C115.148005,4.1239962 116.343993,3.744 117.768,3.744 Z M117.96,6.264 C117.511998,6.264 117.140001,6.41199852 116.844,6.708 C116.547999,7.00400148 116.4,7.37599776 116.4,7.824 C116.4,8.27200224 116.547999,8.64799848 116.844,8.952 C117.140001,9.25600152 117.511998,9.408 117.96,9.408 C118.408002,9.408 118.779999,9.25600152 119.076,8.952 C119.372001,8.64799848 119.52,8.28000216 119.52,7.848 C119.52,7.39999776 119.372001,7.02400152 119.076,6.72 C118.779999,6.41599848 118.408002,6.264 117.96,6.264 Z M117.48,15.816 C117.095998,15.816 116.616003,15.7840003 116.04,15.72 C115.319996,16.0080014 114.96,16.3759978 114.96,16.824 C114.96,17.6720042 115.903991,18.096 117.792,18.096 C119.69601,18.096 120.648,17.6720042 120.648,16.824 C120.648,16.1359966 120.024006,15.792 118.776,15.792 C118.728,15.792 118.512002,15.7999999 118.128,15.816 L117.48,15.816 Z M136.728,9.12 C136.728,9.79200336 136.644001,10.2399989 136.476,10.464 C136.307999,10.6880011 135.976002,10.8 135.48,10.8 L129.624,10.8 C129.335999,10.8 129.156,10.8279997 129.084,10.884 C129.012,10.9400003 128.976,11.0799989 128.976,11.304 C128.976,11.9760034 129.191998,12.5359978 129.624,12.984 C130.056002,13.4320022 130.599997,13.656 131.256,13.656 C131.928003,13.656 132.615996,13.2880037 133.32,12.552 C133.800002,12.0399974 134.327997,11.784 134.904,11.784 C135.384002,11.784 135.771999,11.9199986 136.068,12.192 C136.364001,12.4640014 136.512,12.8079979 136.512,13.224 C136.512,14.1520046 136.004005,14.9399968 134.988,15.588 C133.971995,16.2360032 132.736007,16.56 131.28,16.56 C129.37599,16.56 127.856006,15.9840058 126.72,14.832 C125.583994,13.6799942 125.016,12.1440096 125.016,10.224 C125.016,8.28799032 125.579994,6.72400596 126.708,5.532 C127.836006,4.33999404 129.311991,3.744 131.136,3.744 C132.832008,3.744 134.187995,4.23199512 135.204,5.208 C136.220005,6.18400488 136.728,7.48799184 136.728,9.12 Z M129.096,7.92 C129.096,8.01600048 129.12,8.09599968 129.168,8.16 C129.216,8.22400032 129.383999,8.256 129.672,8.256 L132.36,8.256 C132.600001,8.256 132.748,8.22800028 132.804,8.172 C132.86,8.11599972 132.888,8.01600072 132.888,7.872 C132.888,7.45599792 132.704002,7.09200156 132.336,6.78 C131.967998,6.46799844 131.536002,6.312 131.04,6.312 C130.399997,6.312 129.880002,6.55999752 129.48,7.056 C129.223999,7.3760016 129.096,7.66399872 129.096,7.92 Z M143.112,4.752 L143.112,5.904 C144.344006,4.4639928 145.735992,3.744 147.288,3.744 C148.952008,3.744 150.127997,4.36799376 150.816,5.616 C151.184002,6.2560032 151.368,7.26399312 151.368,8.64 L151.368,12.24 C151.368,13.0560041 151.527998,13.464 151.848,13.464 C151.928,13.464 152.047999,13.4400002 152.208,13.392 C152.288,13.3599998 152.407999,13.344 152.568,13.344 C153.272004,13.344 153.624,13.7599958 153.624,14.592 C153.624,15.6960055 153.144005,16.248 152.184,16.248 C151.927999,16.248 151.544003,16.2160003 151.032,16.152 C150.519997,16.0879997 150.136001,16.056 149.88,16.056 C149.479998,16.056 149.056002,16.0879997 148.608,16.152 C148.159998,16.2160003 147.792001,16.248 147.504,16.248 C146.559995,16.248 146.088,15.7600049 146.088,14.784 C146.088,13.9359958 146.415997,13.4880002 147.072,13.44 C147.504002,13.4079998 147.72,13.2080018 147.72,12.84 L147.72,9.48 C147.72,8.55199536 147.600001,7.90000188 147.36,7.524 C147.119999,7.14799812 146.712003,6.96 146.136,6.96 C145.479997,6.96 144.940002,7.18399776 144.516,7.632 C144.091998,8.08000224 143.88,8.64799656 143.88,9.336 L143.88,11.832 C143.88,12.5520036 143.912,12.9879992 143.976,13.14 C144.04,13.2920008 144.223998,13.3919998 144.528,13.44 C145.104003,13.5200004 145.392,13.9519961 145.392,14.736 C145.392,15.744005 144.968004,16.248 144.12,16.248 C143.879999,16.248 143.584002,16.2240002 143.232,16.176 C142.639997,16.0959996 142.200001,16.056 141.912,16.056 C141.623999,16.056 141.196003,16.0879997 140.628,16.152 C140.059997,16.2160003 139.632001,16.248 139.344,16.248 C138.335995,16.248 137.832,15.7120054 137.832,14.64 C137.832,13.7439955 138.215996,13.296 138.984,13.296 C139.112001,13.296 139.255999,13.3239997 139.416,13.38 C139.576001,13.4360003 139.696,13.464 139.776,13.464 C140.048001,13.464 140.184,13.0160045 140.184,12.12 L140.184,8.232 C140.184,7.31999544 140.048001,6.864 139.776,6.864 C139.712,6.864 139.588001,6.89199972 139.404,6.948 C139.219999,7.00400028 139.08,7.032 138.984,7.032 C138.215996,7.032 137.832,6.5920044 137.832,5.712 C137.832,5.2319976 137.963999,4.84000152 138.228,4.536 C138.492001,4.23199848 138.839998,4.08 139.272,4.08 C139.400001,4.08 139.671998,4.1199996 140.088,4.2 C140.328001,4.24800024 140.535999,4.272 140.712,4.272 C140.904001,4.272 141.231998,4.24000032 141.696,4.176 C142.160002,4.11199968 142.416,4.08 142.464,4.08 C142.896002,4.08 143.112,4.30399776 143.112,4.752 Z M166.008,9.12 C166.008,9.79200336 165.924001,10.2399989 165.756,10.464 C165.587999,10.6880011 165.256002,10.8 164.76,10.8 L158.904,10.8 C158.615999,10.8 158.436,10.8279997 158.364,10.884 C158.292,10.9400003 158.256,11.0799989 158.256,11.304 C158.256,11.9760034 158.471998,12.5359978 158.904,12.984 C159.336002,13.4320022 159.879997,13.656 160.536,13.656 C161.208003,13.656 161.895996,13.2880037 162.6,12.552 C163.080002,12.0399974 163.607997,11.784 164.184,11.784 C164.664002,11.784 165.051999,11.9199986 165.348,12.192 C165.644001,12.4640014 165.792,12.8079979 165.792,13.224 C165.792,14.1520046 165.284005,14.9399968 164.268,15.588 C163.251995,16.2360032 162.016007,16.56 160.56,16.56 C158.65599,16.56 157.136006,15.9840058 156,14.832 C154.863994,13.6799942 154.296,12.1440096 154.296,10.224 C154.296,8.28799032 154.859994,6.72400596 155.988,5.532 C157.116006,4.33999404 158.591991,3.744 160.416,3.744 C162.112008,3.744 163.467995,4.23199512 164.484,5.208 C165.500005,6.18400488 166.008,7.48799184 166.008,9.12 Z M158.376,7.92 C158.376,8.01600048 158.4,8.09599968 158.448,8.16 C158.496,8.22400032 158.663999,8.256 158.952,8.256 L161.64,8.256 C161.880001,8.256 162.028,8.22800028 162.084,8.172 C162.14,8.11599972 162.168,8.01600072 162.168,7.872 C162.168,7.45599792 161.984002,7.09200156 161.616,6.78 C161.247998,6.46799844 160.816002,6.312 160.32,6.312 C159.679997,6.312 159.160002,6.55999752 158.76,7.056 C158.503999,7.3760016 158.376,7.66399872 158.376,7.92 Z M172.368,4.824 L172.368,6.864 C172.592001,6.04799592 172.855998,5.44800192 173.16,5.064 C173.864004,4.1839956 174.847994,3.744 176.112,3.744 C176.992004,3.744 177.731997,4.02799716 178.332,4.596 C178.932003,5.16400284 179.232,5.86399584 179.232,6.696 C179.232,7.35200328 179.040002,7.89199788 178.656,8.316 C178.271998,8.74000212 177.784003,8.952 177.192,8.952 C176.743998,8.952 176.364002,8.80800144 176.052,8.52 C175.739998,8.23199856 175.584,7.88000208 175.584,7.464 C175.584,7.23999888 175.687999,6.928002 175.896,6.528 L175.752,6.528 C174.679995,6.528 173.960002,7.09599432 173.592,8.232 C173.303999,9.14400456 173.16,10.1919941 173.16,11.376 L173.16,12.288 C173.16,12.8640029 173.208,13.2319992 173.304,13.392 C173.368,13.4880005 173.479999,13.536 173.64,13.536 C173.784001,13.536 173.983999,13.5040003 174.24,13.44 C174.496001,13.3759997 174.687999,13.344 174.816,13.344 C175.168002,13.344 175.467999,13.4679988 175.716,13.716 C175.964001,13.9640012 176.088,14.2639982 176.088,14.616 C176.088,15.0800023 175.932002,15.4679984 175.62,15.78 C175.307998,16.0920016 174.928002,16.248 174.48,16.248 C174.239999,16.248 173.792003,16.2080004 173.136,16.128 C172.735998,16.0799998 172.232003,16.056 171.624,16.056 C171.015997,16.056 170.480002,16.0799998 170.016,16.128 C169.247996,16.2080004 168.776001,16.248 168.6,16.248 C167.607995,16.248 167.112,15.7120054 167.112,14.64 C167.112,13.7439955 167.495996,13.296 168.264,13.296 C168.392001,13.296 168.535999,13.3239997 168.696,13.38 C168.856001,13.4360003 168.976,13.464 169.056,13.464 C169.328001,13.464 169.464,13.0160045 169.464,12.12 L169.464,8.232 C169.464,7.31999544 169.328001,6.864 169.056,6.864 C168.992,6.864 168.868001,6.89199972 168.684,6.948 C168.499999,7.00400028 168.36,7.032 168.264,7.032 C167.495996,7.032 167.112,6.5920044 167.112,5.712 C167.112,5.2319976 167.239999,4.84000152 167.496,4.536 C167.752001,4.23199848 168.079998,4.08 168.48,4.08 C168.640001,4.08 168.863999,4.11199968 169.152,4.176 C169.440001,4.24000032 169.711999,4.272 169.968,4.272 C170.160001,4.272 170.439998,4.24000032 170.808,4.176 C171.176002,4.11199968 171.447999,4.08 171.624,4.08 C172.120002,4.08 172.368,4.32799752 172.368,4.824 Z M190.44,16.56 C189.127993,16.56 188.248002,16.0320053 187.8,14.976 C186.679994,16.0320053 185.352008,16.56 183.816,16.56 C182.551994,16.56 181.544004,16.2280033 180.792,15.564 C180.039996,14.8999967 179.664,14.0160055 179.664,12.912 C179.664,11.2319916 180.391993,10.1440025 181.848,9.648 C182.472003,9.43999896 183.191996,9.26400072 184.008,9.12 C185.144006,8.92799904 185.915998,8.70800124 186.324,8.46 C186.732002,8.21199876 186.936,7.83200256 186.936,7.32 C186.936,6.95199816 186.780002,6.64400124 186.468,6.396 C186.155998,6.14799876 185.768002,6.024 185.304,6.024 C184.775997,6.024 184.512,6.19199832 184.512,6.528 C184.512,6.64000056 184.52,6.75199944 184.536,6.864 L184.536,6.96 C184.536,7.40800224 184.348002,7.78399848 183.972,8.088 C183.595998,8.39200152 183.128003,8.544 182.568,8.544 C181.927997,8.544 181.400002,8.35200192 180.984,7.968 C180.567998,7.58399808 180.36,7.10400288 180.36,6.528 C180.36,5.66399568 180.815995,4.98400248 181.728,4.488 C182.640005,3.99199752 183.895992,3.744 185.496,3.744 C187.224009,3.744 188.511996,4.00799736 189.36,4.536 C190.272005,5.11200288 190.728,6.18399216 190.728,7.752 L190.728,12.72 C190.728,13.2320026 190.855999,13.488 191.112,13.488 C191.240001,13.488 191.359999,13.4800001 191.472,13.464 C191.52,13.4479999 191.576,13.44 191.64,13.44 C192.008002,13.44 192.319999,13.5679987 192.576,13.824 C192.832001,14.0800013 192.96,14.3919982 192.96,14.76 C192.96,15.2880026 192.724002,15.7199983 192.252,16.056 C191.779998,16.3920017 191.176004,16.56 190.44,16.56 Z M186.96,11.424 L186.96,10.896 C186.847999,10.9600003 186.144006,11.1599983 184.848,11.496 C183.967996,11.7200011 183.528,12.0639977 183.528,12.528 C183.528,13.2640037 183.959996,13.632 184.824,13.632 C186.248007,13.632 186.96,12.8960074 186.96,11.424 Z M198.744,7.368 L198.744,8.352 L198.72,9.84 L198.672,11.448 C198.656,11.9760026 198.648,12.1920005 198.648,12.096 C198.648,13.0400047 198.951997,13.512 199.56,13.512 C200.136003,13.512 200.424,13.0880042 200.424,12.24 C200.424,12.1119994 200.416,12.0160003 200.4,11.952 L200.4,11.64 C200.384,11.5279994 200.376,11.4480002 200.376,11.4 C200.376,10.5359957 200.807996,10.104 201.672,10.104 C202.680005,10.104 203.184,10.9119919 203.184,12.528 C203.184,13.7920063 202.808004,14.7799964 202.056,15.492 C201.303996,16.2040036 200.256007,16.56 198.912,16.56 C196.271987,16.56 194.952,15.1680139 194.952,12.384 C194.952,11.9359978 194.972,11.2640045 195.012,10.368 C195.052,9.47199552 195.072,8.80000224 195.072,8.352 L195.072,7.584 C195.072,7.183998 195.036,6.93200052 194.964,6.828 C194.892,6.72399948 194.720001,6.672 194.448,6.672 L194.064,6.672 C193.759998,6.672 193.512001,6.55600116 193.32,6.324 C193.127999,6.09199884 193.032,5.79200184 193.032,5.424 C193.032,5.05599816 193.131999,4.74000132 193.332,4.476 C193.532001,4.21199868 193.767999,4.08 194.04,4.08 L194.496,4.08 C194.880002,4.08 195.104,3.96800112 195.168,3.744 C195.216,3.61599936 195.24,3.40000152 195.24,3.096 L195.24,1.92 C195.24,1.3599972 195.387999,0.97600104 195.684,0.768 C195.980001,0.55999896 196.519996,0.456 197.304,0.456 C197.864003,0.456 198.243999,0.5359992 198.444,0.696 C198.644001,0.8560008 198.744,1.20799728 198.744,1.752 L198.744,3.048 C198.744,3.51200232 198.788,3.79999944 198.876,3.912 C198.964,4.02400056 199.191998,4.08 199.56,4.08 L201.288,4.08 C202.232005,4.08 202.704,4.5199956 202.704,5.4 C202.704,6.24800424 202.272004,6.672 201.408,6.672 L199.44,6.672 C199.103998,6.672 198.904,6.72799944 198.84,6.84 C198.776,6.95200056 198.744,7.1279988 198.744,7.368 Z M210.336,16.56 C208.35199,16.56 206.820005,16.0000056 205.74,14.88 C204.659995,13.7599944 204.12,12.1840102 204.12,10.152 C204.12,8.13598992 204.655995,6.56400564 205.728,5.436 C206.800005,4.30799436 208.30399,3.744 210.24,3.744 C212.14401,3.744 213.643995,4.3039944 214.74,5.424 C215.836005,6.5440056 216.384,8.07999024 216.384,10.032 C216.384,12.0800102 215.852005,13.6799942 214.788,14.832 C213.723995,15.9840058 212.24001,16.56 210.336,16.56 Z M210.24,6.696 C209.535996,6.696 208.980002,7.00399692 208.572,7.62 C208.163998,8.23600308 207.96,9.07999464 207.96,10.152 C207.96,11.2400054 208.163998,12.087997 208.572,12.696 C208.980002,13.304003 209.551996,13.608 210.288,13.608 C211.776007,13.608 212.52,12.4560115 212.52,10.152 C212.52,7.84798848 211.760008,6.696 210.24,6.696 Z M222.624,4.824 L222.624,6.864 C222.848001,6.04799592 223.111998,5.44800192 223.416,5.064 C224.120004,4.1839956 225.103994,3.744 226.368,3.744 C227.248004,3.744 227.987997,4.02799716 228.588,4.596 C229.188003,5.16400284 229.488,5.86399584 229.488,6.696 C229.488,7.35200328 229.296002,7.89199788 228.912,8.316 C228.527998,8.74000212 228.040003,8.952 227.448,8.952 C226.999998,8.952 226.620002,8.80800144 226.308,8.52 C225.995998,8.23199856 225.84,7.88000208 225.84,7.464 C225.84,7.23999888 225.943999,6.928002 226.152,6.528 L226.008,6.528 C224.935995,6.528 224.216002,7.09599432 223.848,8.232 C223.559999,9.14400456 223.416,10.1919941 223.416,11.376 L223.416,12.288 C223.416,12.8640029 223.464,13.2319992 223.56,13.392 C223.624,13.4880005 223.735999,13.536 223.896,13.536 C224.040001,13.536 224.239999,13.5040003 224.496,13.44 C224.752001,13.3759997 224.943999,13.344 225.072,13.344 C225.424002,13.344 225.723999,13.4679988 225.972,13.716 C226.220001,13.9640012 226.344,14.2639982 226.344,14.616 C226.344,15.0800023 226.188002,15.4679984 225.876,15.78 C225.563998,16.0920016 225.184002,16.248 224.736,16.248 C224.495999,16.248 224.048003,16.2080004 223.392,16.128 C222.991998,16.0799998 222.488003,16.056 221.88,16.056 C221.271997,16.056 220.736002,16.0799998 220.272,16.128 C219.503996,16.2080004 219.032001,16.248 218.856,16.248 C217.863995,16.248 217.368,15.7120054 217.368,14.64 C217.368,13.7439955 217.751996,13.296 218.52,13.296 C218.648001,13.296 218.791999,13.3239997 218.952,13.38 C219.112001,13.4360003 219.232,13.464 219.312,13.464 C219.584001,13.464 219.72,13.0160045 219.72,12.12 L219.72,8.232 C219.72,7.31999544 219.584001,6.864 219.312,6.864 C219.248,6.864 219.124001,6.89199972 218.94,6.948 C218.755999,7.00400028 218.616,7.032 218.52,7.032 C217.751996,7.032 217.368,6.5920044 217.368,5.712 C217.368,5.2319976 217.495999,4.84000152 217.752,4.536 C218.008001,4.23199848 218.335998,4.08 218.736,4.08 C218.896001,4.08 219.119999,4.11199968 219.408,4.176 C219.696001,4.24000032 219.967999,4.272 220.224,4.272 C220.416001,4.272 220.695998,4.24000032 221.064,4.176 C221.432002,4.11199968 221.703999,4.08 221.88,4.08 C222.376002,4.08 222.624,4.32799752 222.624,4.824 Z" fill="currentColor" />
          </g>
        </svg>
      </span>
    );
  }
}