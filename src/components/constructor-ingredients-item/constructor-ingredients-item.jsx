import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop, useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { deleteIngredientConstructor } from '../../services/actions/index';

import { ingredientTypes } from '../../utils/types';
import styles from './constructor-ingredients-item.module.css';

function ConstructorIngredientsItem({ item, index, moveCard }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteIngredientConstructor(item));
  };

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'component',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'component',
    item: () => ({ id: item.id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  if (item.type !== 'bun') drag(drop(ref));
  const preventDefault = (e) => e.preventDefault();

  return (
    <div
      className={styles.constructorItem}
      ref={ref}
      style={{ opacity }}
      onDrop={preventDefault}
      data-handler-id={handlerId}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={handleDelete}
      />
    </div>
  );
}

ConstructorIngredientsItem.propTypes = {
  item: PropTypes.shape(ingredientTypes).isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
};

export default ConstructorIngredientsItem;
