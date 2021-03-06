import {
  FC,
  useCallback,
  useMemo,
  useState,
  useContext,
  ComponentType,
} from 'react';
import styled from 'styled-components';

import { CertsContext } from '@/contexts/certs';
import Button from '@/components/Button';

import Title from './Title';
import SortControl from './SortControl';
import SearchControl from './SearchControl';
import Certs from './Certs';

const Wrapper = styled.div`
  margin-top: 8%;
`;

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    width: 8em;
    padding: 0.7em 1em;
  }
`;

export type TMyCertsRenderComponentProps = {
  openModal: () => void;
};

type TProps = {
  title: string;
  Empty?: ComponentType<TMyCertsRenderComponentProps>;
  TitleRight?: ComponentType<TMyCertsRenderComponentProps>;
  Modal?: ComponentType<{ visible: boolean; onClose: () => void }>;
};

const MyCerts: FC<TProps> = ({ title, Modal, TitleRight, Empty }) => {
  const { certs } = useContext(CertsContext);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const filteredCerts = useMemo(
    () => (searchText ? certs.filter(c => c.name.includes(searchText)) : certs),
    [certs, searchText],
  );

  const openModal = useCallback(() => setModalVisible(true), []);
  const closeModal = useCallback(() => setModalVisible(false), []);
  const EmptyComponent = useMemo(
    () => (Empty ? <Empty openModal={openModal} /> : null),
    [],
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        {TitleRight && <TitleRight openModal={openModal} />}
      </TitleWrapper>
      <div>
        <ControlWrapper>
          <SortControl />
          <SearchControl
            value={searchText}
            setValue={e => setSearchText(e.target.value)}
          />
        </ControlWrapper>
        {certs.length === 0 ? EmptyComponent : <Certs certs={filteredCerts} />}
      </div>
      {Modal && <Modal visible={modalVisible} onClose={closeModal} />}
    </Wrapper>
  );
};

export default MyCerts;
